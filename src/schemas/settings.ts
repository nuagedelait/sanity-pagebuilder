
import { FieldDefinition, SchemaTypeDefinition, defineField, defineType } from 'sanity'

const settingsSchema = defineType({
    name: 'settings',
    title: 'Settings',
    icon: '',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Site Title',
            type: 'string',
        }),
    ],
})

export default (additionnalFields: FieldDefinition[]):SchemaTypeDefinition => {
    settingsSchema.fields = [
        ...settingsSchema.fields,
        ...additionnalFields
    ]
    return settingsSchema;
}