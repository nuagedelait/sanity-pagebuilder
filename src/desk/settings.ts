import { StructureBuilder } from "sanity/structure"
import { ControlsIcon } from '@sanity/icons';
import { SchemaTypeDefinition } from "sanity";
import { getPath } from "../utils";
import { LanguageType } from "../i18n";

export default function settings(languages:LanguageType) {
    return (S: StructureBuilder, api: string, customSchemas: SchemaTypeDefinition[]) => {

        const { lang } = getPath(window.location.href)

        return S.list()
            .id('list-settings')
            .items([
                S.listItem()
                    .title("Global Settings")
                    .icon(ControlsIcon)
                    .child(
                        S.editor()
                            .title('Global settings')
                            .schemaType('settings')
                            .documentId(`global-settings${lang ? `-${lang}` : ''}`)
                    ),
                S.listItem()
                    .title("Global Redirections")
                    .icon(ControlsIcon)
                    .child(
                        S.editor()
                            .title('Redirections')
                            .schemaType('redirects')
                            .documentId(`global-redirects${lang ? `-${lang}` : ''}`)
                    ),
            ])
    }
}





