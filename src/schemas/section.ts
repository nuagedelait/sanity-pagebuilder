import { UserIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'
import { DocumentType } from './document'

export interface SectionType extends DocumentType {

}

export default function Section(blocks: any[]) {

    const fields: any[] = [
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
                isUnique: (value, context) => context.defaultIsUnique(value, context),
            },
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'displayTitle',
            title: 'Display Title',
            type: 'boolean',
            initialValue: false
        })
    ]
    if (blocks.length > 0) {
        const field = defineField({
            title: 'Content',
            name: 'content',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: blocks
                }
            ],
        })
        fields.push(field);
    }
    return defineType({
        name: 'section',
        title: 'Section',
        icon: UserIcon,
        type: 'document',
        fields
    })
}