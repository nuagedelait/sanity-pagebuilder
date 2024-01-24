import { SchemaTypeDefinition } from "sanity";
import { getPath } from "../utils";

export function blocksRequest(blocks: SchemaTypeDefinition[]):string {

    const { lang } = getPath(window.location.href)

    const types = blocks.map(currentSchema => `"${currentSchema.name}"`);
    return `_type in [${types.join(',')}]${lang ? ` && lang == "${lang}"` : ''}`;
}