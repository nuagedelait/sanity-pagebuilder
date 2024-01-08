import { UserIcon } from '@sanity/icons'
import { SanityAsset } from '@sanity/image-url/lib/types/types'
import { defineField, defineType } from 'sanity'

export interface AuthorType {
  name?: string
  picture?: SanityAsset
}

const Author = defineType({
  name: 'author',
  title: 'Authors',
  icon: UserIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'email'
    }),
    defineField({
      name: 'picture',
      title: 'Picture',
      type: 'image',
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
  ],
})

export default Author
