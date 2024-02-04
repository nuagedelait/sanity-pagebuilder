import {TextIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'
import fields, {prefix, InputType} from './input'

export interface StaticType extends Omit<InputType, 'validation, name'> {
  type: 'static'
  class: string
}

const InputStatic = defineType({
  name: `${prefix}-static`,
  title: 'Static Text',
  icon: TextIcon,
  type: 'object',
  fields: [
    ...fields.filter( field => field.name !== 'validation' && field.name !== 'name' && field.name !== 'size'),
    defineField({
      name: 'type',
      readOnly: true,
      hidden: true,
      type: 'string',
      initialValue: 'static',
    }),
    defineField({
      name: 'class',
      type: 'string',
      title: 'Class'
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

export default InputStatic
