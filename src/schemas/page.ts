import { DocumentIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'
import document, { DocumentType } from './document'

export interface PageType extends DocumentType {
    displayGutters?: boolean
    displayTitle?: boolean
    displayDescription?: boolean
    sections?: any[]
}

const Page = defineType({
    name: 'page',
    title: 'Pages',
    icon: DocumentIcon,
    type: 'document',
    fields: [
        ...document,
        defineField({
            name: 'displayGutters',
            title: 'Use Gutters',
            type: 'boolean'
        }),
        defineField({
            name: 'displayTitle',
            title: 'Display Title',
            type: 'boolean'
        }),
        defineField({
            name: 'displayDescription',
            title: 'Display Description',
            type: 'boolean'
        }),
        defineField({
            name: 'sections',
            title: 'Sections',
            type: 'array',
            of: [
                {
                    type: 'section'
                }
            ]
        }),
    ],
    preview: {
        select: {
            title: 'slug.current',
            subtitle: 'title',
            media: 'picture'
        },
        prepare(selection) {
            return selection
        }
    }
})
export default Page