import { UserIcon } from '@sanity/icons'
import { defineField, defineType, SanityDocument } from 'sanity'
import { BlocksTypes } from './Blocks';
import document, { DocumentType } from './document'

export interface SectionType {
    _key:string,
    slug:string
    displayTitle: boolean
    content: BlocksTypes[],
    title:string
}

export default function Section(blocks: any[]) {

    const fields: any[] = [
        ...document.filter(field => field.name !== 'date' && field.name !== 'image' && field.name !== 'description')
    ]
    if (blocks.length > 0) {
        const field = defineField({
            title: 'Content',
            name: 'content',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: blocks,
                    options: {
                        filter: ({ document }: { document: SanityDocument }) => {
                            return {
                                filter: 'lang == $lang',
                                params: {
                                    lang: document.lang
                                }
                            }
                        }
                    }
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