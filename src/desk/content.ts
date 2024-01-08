import { SchemaTypeDefinition } from 'sanity'
import { InsertAboveIcon, InsertBelowIcon } from '@sanity/icons'
import blocks from './blocks'
import listItems from './listItems'

export default function Content(customContentSchemas: SchemaTypeDefinition[], customBlocksSchemas: SchemaTypeDefinition[]) {
    return (S: any, api: string, customSchemas: SchemaTypeDefinition[]) => {
        return S.list().id('_content').items([
            S.listItem()
                .title('Misc')
                .id('item-misc')
                .child(
                    S.list()
                        .id('list-misc')
                        .items([
                            S.listItem()
                                .title("Global Header")
                                .icon(InsertAboveIcon)
                                .child(
                                    S.editor()
                                        .title('Global header')
                                        .schemaType('header')
                                        .documentId('global-header')
                                ),
                            S.listItem()
                                .title("Global Footer")
                                .icon(InsertBelowIcon)
                                .child(
                                    S.editor()
                                        .title('Global footer')
                                        .schemaType('header')
                                        .documentId('global-header')
                                ),
                        ])
                ),
            ...listItems(['page', 'menu', ...customContentSchemas.map(schema => schema.name)])(S, api, customSchemas),
            blocks(customBlocksSchemas)(S, api)
        ])
    }
}