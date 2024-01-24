import { ChevronRightIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

const menuItem = defineType({
    name: 'menuitem',
    title: 'Menu Item',
    icon: ChevronRightIcon,
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        defineField({
            name: 'link',
            title: 'Link',
            type: 'string'
        }),
        defineField({
            name: 'target',
            title: 'Target',
            type: 'string',
            options: {
                list: [
                    { title: 'self', value: '_self' },
                    { title: 'blank', value: '_blank' },
                    { title: 'parent', value: '_parent' },
                    { title: 'top', value: '_top' }
                ]
            }
        }),
        defineField({
            name: 'hasSubmenu',
            title: 'Show submenu',
            type: 'boolean',
            initialValue: false
        }),
        defineField({
            name: 'submenu',
            title: 'Submenu',
            type: 'menu',
            hidden: ({parent}) => {
                return !parent?.hasSubmenu
            }
        }),
    ],
})
export default menuItem