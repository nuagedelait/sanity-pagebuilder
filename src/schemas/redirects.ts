
import { FieldDefinition, SchemaTypeDefinition, defineField, defineType } from 'sanity'


const types = [
    'permanent',
    'temporary',
    'translation'
]

export default defineType({
    name: 'redirects',
    title: 'Redirections',
    type: 'document',
    fields: [
        defineField({
            name: 'entries',
            title: 'Entries',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'source',
                            title: 'Source',
                            type: 'string'
                        },
                        {
                            name: 'destination',
                            title: 'Destination',
                            type: 'string'
                        },
                        {
                            name: 'type',
                            title: 'Type',
                            type: 'string',
                            options: {
                                list: types
                            }
                        }
                    ]
                }
            ]
        }),
    ],
})