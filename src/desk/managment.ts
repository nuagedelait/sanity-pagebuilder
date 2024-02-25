import { SchemaTypeDefinition } from 'sanity'
import listItems from './listItems'
import { LanguageType } from '../i18n'

export default function Managment(managmentSchemas: SchemaTypeDefinition[], languages: LanguageType) {
    return (S: any, api: string, customSchemas: SchemaTypeDefinition[]) => S.list()
        .id('_managment')
        .items(listItems(
            [
                'author',
                'category',
                ...managmentSchemas.map(schema => schema.name)
            ], languages)(S, api, customSchemas)
        )
}