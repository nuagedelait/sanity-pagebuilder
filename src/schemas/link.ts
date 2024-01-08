import { defineType } from 'sanity';

export interface LinkType {
    text: string,
    href: string,
    target: '_blank' | '_self' | '_parent'
}

export default defineType({
    name: 'link',
    title: 'Link',
    type: 'object',
    fields: [
        {
            name: 'text',
            title: 'Text',
            type: 'string',
        },
        {
            name: 'href',
            title: 'href',
            type: 'string',
        },
        {
            name: 'target',
            title: 'Target',
            type: 'string',
            options: {
                list: [
                    { title: 'blank', value: '_blank' },
                    { title: 'self', value: '_self' },
                    { title: 'parent', value: '_parent' }
                ],
            },
        },

    ],
    preview: {
        select: {
            name: 'text'
        },
        prepare({ name }) {
            return {
                title: name
            }
        }
    }
})