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
import redirects from './redirects'
import i18n, { LanguageType } from '../i18n'


export default function schemas(
    customSchemas: SchemaTypeDefinition[],
    languages: LanguageType
) {

    let blocks = [...defaultBlocks]

    return [
        i18n(page, languages, true),
        i18n(header, languages),
        i18n(footer, languages),
        i18n(menu, languages),
        menuItem,
        link,
        i18n(author, languages, true),
        i18n(category, languages, true),
        i18n(section(blocks), languages),
        ...i18n(blocks,languages),
        ...i18n(customSchemas as any, languages),
        settings([]),
        redirects
    ]
}