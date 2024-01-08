import { SchemaTypeDefinition } from "sanity";

export function blocksRequest(blocks: SchemaTypeDefinition[]):string {
    const types = blocks.map(currentSchema => `"${currentSchema.name}"`);
    return `_type in [${types.join(',')}]`;
}