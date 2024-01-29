import { ThLargeIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'
import block, { BlockType, prefix } from './block';

export interface GridBlockType extends BlockType {
    contenttype: string,
    category: string,
    filter: string,
    limit: number
}

const grid = defineType({
    name: 'grid',
    title: prefix + 'Grid',
    icon: ThLargeIcon,
    type: 'document',
    fields: [
        ...block,
        defineField({
            name: 'contenttype',
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
            subtitle: 'slug.current',
            media: 'image'
        },
        prepare(selection) {
            return {
                title: `[GRID] ${selection.title}`,
                media: selection.media
            }
        }
    }
})

export default grid