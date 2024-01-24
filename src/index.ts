import { definePlugin, SchemaTypeDefinition } from 'sanity'
import schemas from './schemas'
import structure from './desk'
import navbar from './studio/navbar'

export type { PageType } from './schemas/page'
export { default as i18n } from './i18n';
export { getPath } from './utils';

interface MyPluginConfig {
  addBlocksSchemas?: SchemaTypeDefinition[]
  addContentSchemas?: SchemaTypeDefinition[]
  addManagmentSchemas?: SchemaTypeDefinition[]
  api?: string,
  languages?: string[]
}

export const pagebuilderTool = definePlugin<MyPluginConfig | void>((config = {
  api: 'v2023-08-01'
}) => {

  const customContentSchemas = config?.addContentSchemas || [];
  const customBlocksSchemas = config?.addBlocksSchemas || [];
  const customManagmentSchemas = config?.addManagmentSchemas || [];
  const languages = config?.languages || undefined

  return {
    name: 'sanity-plugin-pagebuilder',
    studio: {
      components: {
        navbar: navbar(languages)
      }
    },
    schema: {
      types: schemas([
        ...customManagmentSchemas,
        ...customContentSchemas
      ],
        languages),
    },
    tools: (prev, { currentUser }) => {
      prev.forEach(tool => {
        if (tool.title === "Structure") {
          tool.options.structure = structure(
            customContentSchemas,
            customManagmentSchemas,
            customBlocksSchemas,
            tool.options.structure,
            config?.api || 'v2023-08-01',
            languages
          )
        }
      })
      return prev
    },
  }
})