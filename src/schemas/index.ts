import type {SchemaTypeDefinition} from 'sanity'
import page, {PageType} from './page'
import section, {SectionType} from './section'
import header, {HeaderType} from './header'
import footer from './footer'
import menu, {MenuType} from './menu'
import menuItem, {MenuItemType} from './menuitem'
import link, {LinkType} from './link'
import defaultBlocks, {BlocksTypes} from './Blocks'
import author from './author'
import category from './category'
import settings from './settings'
import redirects from './redirects'
import i18n, {LanguageType} from '../i18n'
import inputs, {InputTypes} from './Blocks/Form/inputs'

export type {
  MenuBlockType,
  LayoutBlockType,
  GridBlockType,
  MultiLinesBlockType,
  BlockType,
  FormBlockType,
  LineType,
} from './Blocks'

export type {
  PageType,
  HeaderType,
  MenuItemType,
  LinkType,
  MenuType,
  SectionType,
  BlocksTypes,
  InputTypes
}

export default function schemas(customSchemas: SchemaTypeDefinition[], languages: LanguageType) {
  let blocks = i18n([...defaultBlocks], languages)

  return [
    i18n(page, languages, true),
    i18n(header, languages),
    i18n(footer, languages),
    i18n(menu, languages),
    menuItem,
    link,
    i18n(author, languages, true),
    i18n(category, languages, true),
    section(blocks),
    ...i18n(blocks, languages),
    ...i18n(customSchemas as any, languages),
    ...inputs,
    settings([]),
    redirects,
  ]
}
