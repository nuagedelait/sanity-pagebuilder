import {UlistIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'
import fields, {InputType, prefix} from './input'

export interface RadioInputType extends Omit<InputType, 'size'> {
  type: 'radio'
  default: number
  multiple: boolean
  options: {
    value: string
    label: string
  }
}

const InputRadio = defineType({
  name: `${prefix}-radios`,
  title: prefix + ' Radios',
  icon: UlistIcon,
  type: 'object',
  fields: [
    ...fields.filter( field => field.name !== 'size'),
    defineField({
      name: 'type',
      readOnly: true,
      hidden: true,
      type: 'string',
      initialValue: 'radio',
    }),
    defineField({
      name: 'default',
      title: 'Default Selected',
      type: 'number',
    }),
    defineField({
      name: 'multiple',
      title: 'Allow multiple',
      type: 'boolean',
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

export default InputRadio
