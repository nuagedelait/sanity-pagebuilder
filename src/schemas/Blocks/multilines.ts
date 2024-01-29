import { defineType } from 'sanity';
import block, { BlockType, prefix } from './block';
import { FieldDefinition, SlugOptions } from 'sanity';

export interface LineType {
    class: string
    text: string,
    _key:string
}

export interface MultiLinesBlockType extends Omit<BlockType, 'title, description'> {
    lines: LineType[]
}

const maxLength = 20;

export default defineType({
    name: 'multilinesBlocks',
    title: prefix + 'Multilines',
    type: 'document',
    fields: [
        ...block.filter((field: FieldDefinition) => field.name !== 'title' && field.name !== 'description').map((field: FieldDefinition) => {
            if (field.name === 'slug') {
                (field.options as SlugOptions).source = (doc, options) => {
                    const parent = options.parent as any;
                    const allLines = parent.lines.reduce((acc: string, line: { text: string }) => acc += line.text + ' ', '');
                    const title = allLines.length > maxLength ? `${allLines.slice(0, maxLength)}...` : allLines
                    return `${title}${parent.lang ? `-${parent.lang}` : ''}`;
                }
            }
            return field;
        }),
        {
            title: 'Lines',
            name: 'lines',
            type: 'array',
            of: [
                {
                    type: 'object',
                    preview: {
                        select: {
                            title: 'text',
                        }
                    },
                    fields: [
                        {
                            name: 'class',
                            type: 'string'
                        },
                        {
                            name: 'text',
                            type: 'string'
                        }
                    ]
                }
            ]
        }
    ],
    preview: {
        select: {
            lines: 'lines',
            media: 'image'
        },
        prepare(selection) {
            const { lines, media } = selection;
            const allLines = lines.reduce((acc: string, line: { text: string }) => acc += line.text + ' ', '');
            const title = allLines.length > maxLength ? `${allLines.slice(0, maxLength)}...` : allLines
            return {
                title: `Multilines | ${title}`,
                media
            }
        }
    }
})