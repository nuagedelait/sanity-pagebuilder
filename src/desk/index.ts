import type { StructureBuilder, ListBuilder, ListItemBuilder, ListItem, Divider } from 'sanity/desk';
import { SchemaTypeDefinition } from 'sanity';
import { DocumentIcon } from '@sanity/icons';
import content from './content';
import managment from './managment';
import settings from './settings';
import schemas from '../schemas';

type Builder = ListBuilder | ListItemBuilder | ListItem | Divider

function isBuilder(structure: any): structure is Builder {
    return structure.constructor ? true : false
}

function isListBuilder(structure: any): structure is ListBuilder {
    return structure.getItems ? true : false
}

export default function structure(
    customContentSchemas: SchemaTypeDefinition[],
    customManagmentSchemas: SchemaTypeDefinition[],
    customBlocksSchemas: SchemaTypeDefinition[],
    addList: null | ((T: StructureBuilder) => Builder),
    api: string
) {

    return (S: StructureBuilder) => {

        let addlists: (ListItemBuilder | ListItem | Divider)[] = [];

        const customSchemas: SchemaTypeDefinition[] = schemas([
            ...customContentSchemas,
            ...customManagmentSchemas,
            ...customBlocksSchemas
        ]);

        if (addList !== null && addList !== undefined) {

            const result = addList(S);

            if (isBuilder(result)) {
                if (isListBuilder(result)) {
                    const items = result.getItems()
                    addlists = items !== undefined ? items : [];
                } else if (result.constructor.name === 'ListItemBuilder') {
                    addlists = [result]
                }
            }
        }

        return S.list()
            .title('Base')
            .items([
                ...addlists,
                S.listItem()
                    .title('Settings')
                    .icon(DocumentIcon)
                    .child(
                        settings()(S, api, customSchemas)
                    ),
                S.listItem()
                    .title('Content')
                    .icon(DocumentIcon)
                    .child(
                        content(customContentSchemas, customBlocksSchemas)(S, api, customSchemas)
                    ),
                S.listItem()
                    .title('Management')
                    .icon(DocumentIcon)
                    .child(
                        managment(customManagmentSchemas)(S, api, customSchemas)
                    ),
            ])
    }
}



