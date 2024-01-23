import { FieldDefinition, defineField, SanityDocument } from "sanity"

export type LanguageType = string[] | undefined
export const langField = (languages: LanguageType) => {
    return {
        name: 'lang',
        title: 'Language',
        type: 'string',
        initialValue: languages && languages.length > 0 ? languages[0] : 'en',
        options: {
            list: languages || ['en']
        },
        hidden: languages === undefined
    }
}

export const translationsField = (languages: LanguageType, type: string) => {
    return {
        name: 'translations',
        title: 'Translations',
        type: 'array',
        of: [
            {
                type: 'object',
                preview: {
                    select: {
                        lang: 'document.lang',
                        title: 'document.title',
                        slug: 'document.slug.current'
                    },
                    prepare(selection: any) {
                        const { lang, title, slug } = selection;
                        return {
                            title: `${lang.toUpperCase()} | ${title}`,
                            subtitle: slug
                        }
                    }
                },
                fields: [
                    {
                        name: 'document',
                        title: 'Document',
                        type: 'reference',
                        to: [
                            {
                                type
                            }
                        ],
                        options: {
                            filter: ({ document }: { document: SanityDocument }) => {
                                return {
                                    filter: 'lang != $lang',
                                    params: {
                                        lang: document.lang
                                    }
                                }
                            }
                        }
                    }
                ]
            }
        ],
        hidden: languages === undefined,
    }
}


function addLang(fields: any[], languages: LanguageType, type: string, hasTranslation: boolean = false) {
    let foundLang = false;
    let foundTranslation = false;
    fields.map((field: any) => {
        if (field.name === 'lang') {
            foundLang = true
            field = defineField(langField(languages));
        }
        if (field.name === 'translation' && hasTranslation) {
            foundTranslation = true
            field = defineField(translationsField(languages, type));
        }
        return field;
    })

    if (!foundLang) {
        fields.push(defineField(langField(languages)))
    }
    if (!foundTranslation && hasTranslation) {
        fields.push(defineField(translationsField(languages, type)))
    }
    return fields;

}

export default <T extends { fields?: FieldDefinition[], name?: string }>(schema: T | T[], languages: LanguageType, hasTranslation: boolean = false): T | T[] => {

    if (Array.isArray(schema)) {
        return schema.map(s => {
            if (s.fields && s.name) {
                s.fields = addLang(s.fields, languages, s.name, hasTranslation)
                return s
            }
            return s

        })
    } else {
        if (schema.fields && schema.name) {
            schema.fields = addLang(schema.fields, languages, schema.name, hasTranslation);
        }
        return schema
    }
}