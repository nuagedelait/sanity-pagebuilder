import menu, { MenuBlockType } from "./menu"
import layout, { LayoutBlockType } from "./layout"
import grid, { GridBlockType } from "./grid"
import tabs from "./tabs"
import multilines, { MultiLinesBlockType } from "./multilines"
import { BlockType } from "./block"

export type BlocksTypes = BlockType | GridBlockType | LayoutBlockType | MultiLinesBlockType | MenuBlockType
export type { MenuBlockType, LayoutBlockType, GridBlockType, MultiLinesBlockType, BlockType }

const blocks: any[] = [menu, layout, grid, tabs, multilines]
export default blocks