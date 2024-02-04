import { StructureBuilder } from 'sanity/structure';
import { BlockElementIcon } from '@sanity/icons'
import blocksMenu from './blocksMenu';
import { blocksRequest } from './queries'
import defaultBlocs from '../schemas/Blocks'
import { SchemaTypeDefinition } from 'sanity';

export default function blocks(customBlocks: SchemaTypeDefinition[]) {
    return (S: StructureBuilder, api: string) => {

        const blocks = [...customBlocks, ...defaultBlocs]

        let filter = blocksRequest(blocks);

        return S.listItem()
            .title('Blocks')
            .id(`item-blocks`)
            .icon(BlockElementIcon)
            .child(
                S.documentList()
                    .id(`list-blocks`)
                    .title('Blocks')
                    .menuItems(blocksMenu(S, blocks))
                    .filter(filter)
                    .apiVersion(api)
            )
    }
}