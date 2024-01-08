import type { SchemaTypeDefinition } from 'sanity'
import page from "./page"
import section from "./section"
import header from './header'
import footer from './footer'
import menu from './menu'
import menuItem from "./menuitem"
import link from "./link"
import defaultBlocks from './Blocks'
import author from './author'
import category from './category'
import settings from './settings'

export default function schemas(
    customSchemas: SchemaTypeDefinition[],
    customBlocksSchemas: SchemaTypeDefinition[] = [],
) {

    let blocks = [...defaultBlocks, ...customBlocksSchemas]

    return [
        page,
        header,
        footer,
        menu,
        menuItem,
        link,
        author,
        category,
        section(blocks),
        ...blocks,
        ...customSchemas,
        settings([])
    ]
}