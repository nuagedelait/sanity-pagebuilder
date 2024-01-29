import { ChevronRightIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'
import { MenuType } from './menu';
import { targets, LinkType, TargetsType } from './link'

export interface MenuItemType {
    title?: string,
    link?: string,
    target?: TargetsType,
    hasSubmenu?: boolean,
    submenu: MenuType
}

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
                list: targets
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
            hidden: ({ parent }) => {
                return !parent?.hasSubmenu
            }
        }),
    ],
})
export default menuItem;