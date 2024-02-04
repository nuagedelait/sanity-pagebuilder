import {ComposeIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'
import fields, {prefix, InputType} from './input'

export interface TextInputType extends InputType {
  type: 'text'
  subtype: string
  size: number
}

const subtypes = ['text', 'tel', 'search', 'password', 'email', 'file', 'date'] as const

const InputText = defineType({
  name: `${prefix}-text`,
  title: prefix + ' Text',
  icon: ComposeIcon,
  type: 'object',
  fields: [
    ...fields,
    defineField({
      name: 'type',
      readOnly: true,
      hidden: true,
      type: 'string',
      initialValue: 'text',
    }),
    defineField({
      name: 'subtype',
      title: 'Text type',
      type: 'string',
      options: {
        list: [...subtypes] as string[],
      },
    }),
  ],
  preview: {
    select: {
      title: 'type',
      label: 'label',
      subtitle: 'name',
    },
    prepare({title, subtitle, label}) {
      return {
        title: `[${title}] ${label}`,
        subtitle,
      }
    },
  },
})

export default InputText
