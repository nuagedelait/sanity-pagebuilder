import { ThLargeIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'
import block, { prefix } from './block';

const grid = defineType({
    name: 'grid',
    title: prefix + 'Grid',
    icon: ThLargeIcon,
    type: 'document',
    fields: [
        ...block,
        defineField({
            name: 'type',
            title: 'Content type',
            type: 'string',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: [
                { type: 'category' }
            ],
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'filter',
            title: 'Query filter',
            type: 'string'
        }),
        defineField({
            name: 'limit',
            title: 'Query limit',
            type: 'number'
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'slug.current'
        },
        prepare(selection) {
            return {
                title: `[GRID] ${selection.title}`
            }
        }
    }
})

export default grid