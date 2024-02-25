import {defineField, ValidationContext, CustomValidatorResult, SlugValidationContext} from 'sanity'
import {SanityAsset} from '@sanity/image-url/lib/types/types'
import image from './image'

export interface DocumentType {
  id: string
  slug: {
    current?: string
  }
  title: string
  description: string
  image: SanityAsset
  date: string
}

type hasType = {_type: string}

export function hasType(doc: any): doc is hasType {
  return '_type' in doc
}

const document = [
  defineField({
    name: 'slug',
    title: 'Slug',
    type: 'slug',
    options: {
      source:'title',
      slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      isUnique: async (value, context) => {
        if (hasType(context.parent)) {
          const currentSchemaType = context.parent._type
          const docsWithSameSlug = await context
            .getClient({apiVersion: '2021-08-21'})
            .fetch(`*[_type=="${currentSchemaType}" && slug== "value"]`);
            return docsWithSameSlug.length === 0;
        } else {
          return context.defaultIsUnique(value, context)
        }
      },
    },
    validation: (rule) => rule.required(),
  }),
  defineField({
    name: 'title',
    title: 'Title',
    type: 'string',
    validation: (rule) =>
      rule.custom(
        (title: string | undefined, context: ValidationContext): CustomValidatorResult => {
          if (context && context.path && context.path.length > 1) {
            return true
          } else {
            return title !== undefined && title.length > 0 ? true : 'title is required'
          }
        },
      ),
  }),
  defineField({
    name: 'description',
    title: 'Description',
    type: 'string',
    validation: (rule) => rule.required(),
  }),
  defineField({
    name: 'date',
    title: 'Date',
    type: 'datetime',
    initialValue: () => new Date().toISOString(),
    validation: (rule) => rule.required(),
  }),
  defineField({
    ...image,
    validation: (rule) => rule.required(),
  }),
]
export default document
