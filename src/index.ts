import { definePlugin, SchemaTypeDefinition } from 'sanity'
import schemas from './schemas'
import structure from './desk'

interface MyPluginConfig {
  addBlocksSchemas?: SchemaTypeDefinition[]
  addContentSchemas?: SchemaTypeDefinition[]
  addManagmentSchemas?: SchemaTypeDefinition[]
  api: string
}

export const pagebuilderTool = definePlugin<MyPluginConfig | void>((config = {
  api: 'v2023-08-01'
}) => {

  const customContentSchemas = config?.addContentSchemas || [];
  const customBlocksSchemas = config?.addBlocksSchemas || [];
  const customManagmentSchemas = config?.addManagmentSchemas || [];

  return {
    name: 'sanity-plugin-pagebuilder',
    schema: {
      types: schemas([
        ...customManagmentSchemas,
        ...customContentSchemas
      ],
        customBlocksSchemas),
    },
    tools: (prev, { currentUser }) => {
      prev.forEach(tool => {
        if (tool.title === "Structure") {
          tool.options.structure = structure(
            customContentSchemas,
            customManagmentSchemas,
            customBlocksSchemas,
            tool.options.structure,
            config?.api || 'v2023-08-01'
          )
        }
      })
      return prev
    },
  }
})