import {defineField} from 'sanity'

const subtypes = ['required', 'string', 'number', 'phone', 'email', 'date'] as const

export interface InputType {
  name: string
  validation: {
    type: (typeof subtypes)[number]
    message: string
  }[]
  label: string
  placeholder: string
  grouNname: string
  hidden: boolean
  showLabel: boolean
  _key: string
}

export const prefix = 'input'

const Input = [
  defineField({
    name: 'label',
    title: 'Label',
    type: 'string',
  }),
  defineField({
    name: 'showLabel',
    title: 'Show Label',
    type: 'boolean',
    initialValue: false,
  }),
  defineField({
    name: 'name',
    title: 'Name',
    type: 'string',
  }),
  defineField({
    name: 'placeholder',
    title: 'Placeholder',
    type: 'string',
  }),
  defineField({
    name: 'groupName',
    title: 'Group',
    type: 'string',
  }),
  defineField({
    name: 'hidden',
    title: 'Hidden',
    type: 'boolean',
    initialValue: false,
  }),
  defineField({
    name: 'size',
    title: 'Size',
    type: 'number',
    initialValue: 20,
  }),
  defineField({
    name: 'validation',
    title: 'Validation Type',
    type: 'array',
    of: [
      {
        type: 'object',
        fields: [
          {
            name: 'type',
            type: 'string',
            options: {
              list: subtypes,
            },
          },
          {
            name: 'message',
            type: 'string',
          },
        ],
      },
    ],
  }),
]

export default Input
