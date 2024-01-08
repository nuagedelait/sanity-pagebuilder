import { UserIcon } from '@sanity/icons'
import { SanityAsset } from '@sanity/image-url/lib/types/types'
import { defineField, defineType } from 'sanity'

export interface SkillCategoryType {
    slug: string
    name: string
    icon?: SanityAsset
}

const Category = defineType({
    name: 'category',
    title: 'Categories',
    icon: UserIcon,
    type: 'document',
    fields: [
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
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'icon',
            title: 'Icon',
            type: 'image',
            options: { hotspot: true }
        })
    ],
})

export default Category
