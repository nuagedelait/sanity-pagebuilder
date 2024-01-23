import { defineField } from 'sanity'
import { SanityAsset } from '@sanity/image-url/lib/types/types'
import image from './image'

export interface DocumentType {
    id: string
    slug: {
        current?: string
    },
    title: string,
    description: string
    coverImage: SanityAsset
    date: string,
}

const document = [
    defineField({
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
            source: (doc, options) => {
                const parent = options.parent as any;
                return `${parent.title}${parent.lang ? `-${parent.lang}` : ''}`;
            },
            maxLength: 96,
            isUnique: (value, context) => context.defaultIsUnique(value, context),
        },
        validation: (rule) => rule.required()
    }),
    defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (rule) => rule.required()
    }),
    defineField({
        name: 'description',
        title: 'Description',
        type: 'string',
        validation: (rule) => rule.required()
    }),
    defineField({
        name: 'date',
        title: 'Date',
        type: 'datetime',
        initialValue: () => new Date().toISOString(),
        validation: (rule) => rule.required()
    }),
    defineField({
        ...image,
        validation: (rule) => rule.required()
    }),
]
export default document