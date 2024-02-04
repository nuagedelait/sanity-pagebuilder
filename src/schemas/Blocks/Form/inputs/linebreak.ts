import {EnterIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'
import {prefix} from './input'

export interface LinebreakType {
  type: 'linebreak'
  class: string
  _key: string
}

const Linebreak = defineType({
  name: `${prefix}-linebreak`,
  title: 'Line break',
  icon: EnterIcon,
  type: 'object',
  fields: [
    defineField({
      name: 'type',
      readOnly: true,
      hidden: true,
      type: 'string',
      initialValue: 'linebreak',
    }),
    defineField({
      name: 'class',
      type: 'string',
      title: 'Class',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Line break',
      }
    },
  },
})

export default Linebreak
