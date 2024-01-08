import { SchemaTypeDefinition } from 'sanity'
import listItems from './listItems'

export default function Managment(managmentSchemas: SchemaTypeDefinition[]) {
    return (S: any, api: string, customSchemas: SchemaTypeDefinition[]) => S.list()
        .id('_managment')
        .items(listItems(
            [
                'author',
                'category',
                ...managmentSchemas.map(schema => schema.name)
            ])(S, api, customSchemas)
        )
}