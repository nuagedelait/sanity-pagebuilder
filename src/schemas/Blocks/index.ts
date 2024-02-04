import menu, {MenuBlockType} from './menu'
import layout, {LayoutBlockType} from './layout'
import grid, {GridBlockType} from './grid'
import tabs from './tabs'
import inputs, {InputTypes} from './Form/inputs'
import form, {FormBlockType} from './Form'
import multilines, {MultiLinesBlockType, LineType} from './multilines'
import {BlockType} from './block'

export type BlocksTypes =
  | BlockType
  | GridBlockType
  | LayoutBlockType
  | MultiLinesBlockType
  | MenuBlockType
  | FormBlockType

export type {
  MenuBlockType,
  LayoutBlockType,
  GridBlockType,
  MultiLinesBlockType,
  BlockType,
  LineType,
  FormBlockType,
}

const blocks: any[] = [menu, layout, grid, tabs, multilines, form]
export default blocks
