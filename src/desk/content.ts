import {SchemaTypeDefinition} from 'sanity'
import {InsertAboveIcon, InsertBelowIcon} from '@sanity/icons'
import blocks from './blocks'
import listItems from './listItems'
import {getPath} from '../utils'
import {StructureBuilder} from 'sanity/structure'
import { LanguageType } from '../i18n'

export default function Content(
  customContentSchemas: SchemaTypeDefinition[],
  customBlocksSchemas: SchemaTypeDefinition[],
  languages: LanguageType,
) {
  const {lang} = getPath(window.location.href)

  return (S: StructureBuilder, api: string, customSchemas: SchemaTypeDefinition[]) => {
    return S.list()
      .id('_content')
      .items([
        S.listItem()
          .title('Misc')
          .id('item-misc')
          .child(
            S.list()
              .id('list-misc')
              .items([
                S.listItem()
                  .title('Global Header')
                  .icon(InsertAboveIcon)
                  .child(
                    S.editor()
                      .title('Global header')
                      .schemaType('header')
                      .documentId(`global-header${lang ? `-${lang}` : ''}`)
                      .initialValueTemplate('header', {
                        lang,
                      }),
                  ),
                S.listItem()
                  .title('Global Footer')
                  .icon(InsertBelowIcon)
                  .child(
                    S.editor()
                      .title('Global footer')
                      .schemaType('footer')
                      .documentId(`global-footer${lang ? `-${lang}` : ''}`)
                      .initialValueTemplate('footer', {
                        lang,
                      }),
                  ),
              ]),
          ),
        ...listItems(['page', 'menu', ...customContentSchemas.map((schema) => schema.name)], languages)(
          S,
          api,
          customSchemas,
        ),
        blocks(customBlocksSchemas)(S, api),
      ])
  }
}
