import {CheckmarkIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'
import fields, {prefix, InputType} from './input'

export interface CheckboxInputType extends Omit<InputType, 'size'> {
  type: 'checkbox'
  default: number
  list: {
    value: string
    label: string
  }
}

const InputCheckbox = defineType({
  name: `${prefix}-checkbox`,
  title: prefix + ' Checkbox',
  icon: CheckmarkIcon,
  type: 'object',
  fields: [
    ...fields.filter( field => field.name !== 'size'),
    defineField({
      name: 'type',
      readOnly: true,
      hidden: true,
      type: 'string',
      initialValue: 'checkbox',
    }),
    defineField({
      name: 'default',
      title: 'Default Selected',
      type: 'number'
    }),
    defineField({
      name: 'list',
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

export default InputCheckbox
