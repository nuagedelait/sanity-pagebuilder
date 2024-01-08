import { SchemaTypeDefinition } from 'sanity';
import type { StructureBuilder } from 'sanity/desk';
import { ComposeIcon } from '@sanity/icons'
import { prefix } from '../schemas/Blocks/block'

export default function blocksMenu(S: StructureBuilder, blocks: SchemaTypeDefinition[]) {
    return blocks.map((block: SchemaTypeDefinition) => S.menuItem()
        .title(`Create ${block.title?.replace(prefix, '')}`)
        .icon(block.icon ? block.icon : ComposeIcon)
        .intent({ type: 'create', params: { type: block.name } })
        .showAsAction(true))
}