import {ComposeIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'
import block, {prefix, BlockType} from '../block'
import {types as inputs, InputTypes} from './inputs'

export interface FormBlockType extends BlockType {
  action: string
  inputs: InputTypes[]
}

const Form = defineType({
  name: 'formBlocks',
  title: prefix + 'Form',
  icon: ComposeIcon,
  type: 'document',
  fields: [
    ...block,
    defineField({
      name: 'action',
      title: 'Action',
      type: 'string',
    }),
    defineField({
      name: 'inputs',
      title: 'Inputs',
      type: 'array',
      of: inputs,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
      media: 'image'
    },
    prepare(selection) {
      return {
        title: `[FORM] ${selection.title}`,
        media: selection.media
      }
    },
  },
})

export default Form
