import { defineType } from 'sanity';
import block, { prefix, BlockType } from './block';
import image from '../image';
import { SanityAsset } from '@sanity/image-url/lib/types/types'
import { LinkType } from '../link';

export interface LayoutBlockType extends BlockType {
    subtitle: string
    images: SanityAsset[]
    layout: string
    buttons: LinkType[],
    text:string
}

export default defineType({
    name: 'layoutBlocks',
    title: prefix + 'Layout',
    type: 'document',
    fields: [
        ...block,
        {
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
        },
        {
            name: 'text',
            title: 'Text',
            type: 'text',
        },
        {
            title: 'Images',
            name: 'images',
            type: 'array',
            of: [
                {
                    ...image
                }
            ]

        },
        {
            title: 'layout',
            name: 'layout',
            type: 'string',
            options: {
                list: ["basic"]
            },
        },
        {
            title: 'buttons',
            name: 'buttons',
            type: 'array',
            of: [
                {
                    type: 'link'
                }
            ]
        }
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'subtitle',
            description: 'description',
            layout: 'layout',
            media: 'image'
        },
        prepare(selection) {
            const { title, media, subtitle, description, layout } = selection
            const _title = title ? ` ${title}` : '';
            const _subTitle = _title === '' && subtitle ? ` ${subtitle}` : '';
            const _description = _title === '' && _subTitle === '' && description ? ` ${description.substr(0, 20)}...` : '';

            return {
                title: `Layout${layout ? ` ${layout}` : ''} | ${_title}${_subTitle}${_description}`,
                media
            }
        }
    }
})