import {SelectIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'
import fields, {prefix, InputType} from './input'

export interface SelectInputType extends InputType {
  type: 'select'
  default: string
  size: number
  options: {
    value: string
    label: string
  }
}

const InputSelect = defineType({
  name: `${prefix}-select`,
  title: prefix + ' Select',
  icon: SelectIcon,
  type: 'object',
  fields: [
    ...fields,
    defineField({
      name: 'type',
      readOnly: true,
      hidden: true,
      type: 'string',
      initialValue: 'select',
    }),
    defineField({
      name: 'default',
      title: 'Default Value',
      type: 'string',
    }),
    defineField({
      name: 'options',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'value',
              title: 'Value',
              type: 'string',
            },
            {
              name: 'label',
              title: 'Label',
              type: 'string',
            },
          ],
        },
      ],
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

export default InputSelect
