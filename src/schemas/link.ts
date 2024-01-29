import { defineType } from 'sanity';

const targetsValues= [
    { title: 'self', value: '_self' },
    { title: 'blank', value: '_blank' },
    { title: 'parent', value: '_parent' },
    { title: 'top', value: '_top' }
] as const;

export const targets = [...targetsValues as any as Array<{title:string, value:string}>];
export type TargetsType = typeof targetsValues[number]['title']

export interface LinkType {
    text: string,
    href: string,
    target: TargetsType,
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
                list: targets,
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