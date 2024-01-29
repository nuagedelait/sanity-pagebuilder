
import { defineField, defineType, FileAsset } from 'sanity'
import type { MenuType } from './menu'

export interface HeaderType {
  menu?: MenuType,
  logo?: FileAsset,
  logoMobile?: FileAsset,
  siteTitle?: string,
  siteTitlexs?: string
  baseline?: string
}

const Header = defineType({
  name: 'header',
  title: 'Header',
  icon: '',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      readOnly: true,
      initialValue: 'Header'
    }),
    defineField({
      name: 'menu',
      title: 'Menu',
      type: 'reference',
      to: [
        { type: 'menu' }
      ]
    }),
    defineField({
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string'
    }),
    defineField({
      name: 'siteTitlexs',
      title: 'Mobile Site Title',
      type: 'string'
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'logoMobile',
      title: 'Logo Mobile',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'baseline',
      title: 'Baseline',
      type: 'text',
    }),
  ],
})

export default Header