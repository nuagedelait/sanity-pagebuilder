import { StructureBuilder } from "sanity/desk"
import { ControlsIcon } from '@sanity/icons';
import { SchemaTypeDefinition } from "sanity";

export default function settings() {
    return (S: StructureBuilder, api: string, customSchemas: SchemaTypeDefinition[]) => {
        return S.list()
            .id('list-settings')
            .items([
                S.listItem()
                    .title("Global Header")
                    .icon(ControlsIcon)
                    .child(
                        S.editor()
                            .title('Global settings')
                            .schemaType('settings')
                            .documentId('global-settings')
                    ),
            ])
    }
}





