import { UserIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

const Footer = defineType({
  name: 'footer',
  title: 'Footer',
  icon: '',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      readOnly: true,
      initialValue: 'Footer'
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'menu',
      title: 'Menu',
      type: 'reference',
      to: [
        { type: 'menu' }
      ]
    }),
  ],
})

export default Footer