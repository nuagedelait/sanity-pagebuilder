import { defineType } from 'sanity';
import block, { prefix } from './block';

export default defineType({
    name: 'menuBlocks',
    title: prefix + 'Menu',
    type: 'document',
    fields: [
        ...block,
        {
            title: 'menu',
            name: 'menu',
            type: 'reference',
            to: [
                {
                    type: 'menu'
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
            const _description = _title === '' && _subTitle === '' && description ? ` ${description.substr(0,20)}...` : '';

            return {
                title: `Menu${layout ? ` ${layout}` : ''} | ${_title}${_subTitle}${_description}`,
                media
            }
        }
    }
})