import { MenuIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'
import document from './document'

const Menu = defineType({
    name: 'menu',
    title: 'Menus',
    icon: MenuIcon,
    type: 'document',
    fields: [
        ...document.filter(field => {
            return field.name !== 'date' 
            && field.name !== 'description'
            && field.name !== 'image'
            && field.name !== 'slug'
        }),
        defineField({
            name: 'items',
            title: 'Items',
            type: 'array',
            of: [{
                type: 'menuitem'
            }]
        }),
    ],
})
export default Menu