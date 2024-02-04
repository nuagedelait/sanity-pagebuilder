import {BlockContentIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'
import fields, {prefix, InputType} from './input'

export interface TextareaInputType extends InputType {
  type: 'textarea'
  subtype: string
  size: number
}

const InputTextarea = defineType({
  name: `${prefix}-textarea`,
  title: prefix + ' Textarea',
  icon: BlockContentIcon,
  type: 'object',
  fields: [
    ...fields,
    defineField({
      name: 'type',
      readOnly: true,
      hidden: true,
      type: 'string',
      initialValue: 'textarea',
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

export default InputTextarea
