import { StructureBuilder } from 'sanity/desk';
import schemas from '../schemas'
import { SchemaTypeDefinition } from 'sanity';

export default function listItems(schemaNames: string[]) {

    return (S: StructureBuilder, api: string, customSchemas: SchemaTypeDefinition[]) => {
        return schemaNames.map((schemaName: string) => {

            let schema = customSchemas.find(schema => schema.name === schemaName);

            if (!schema) {

                const title = schemaName[0].toUpperCase() + schemaName.slice(1) + 's'
                
                return S.listItem()
                .title(title)
                .id(`item-${schemaName}`)
                .child(
                    S.documentList()
                    .schemaType(schemaName)
                    .title(title)
                    .filter(`_type == "${schemaName}"`)
                    .apiVersion(api)
                )
            } else {
                return S.listItem()
                    .title(schema.title ? schema.title : schema.name)
                    .id(`item-${schema.name}`)
                    .icon(schema.icon ? schema.icon : '')
                    .schemaType(schema.name)
                    .child(
                        S.documentList()
                            .id(`list-${schema.name}`)
                            .title(schema.title ? schema.title : schema.name)
                            .filter(`_type == "${schema.name}"`)
                            .apiVersion(api)
                    )
            }
        }).filter(result => result !== null)
    }


}