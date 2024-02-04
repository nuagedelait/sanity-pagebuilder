import textInput, {TextInputType} from './text'
import selectInput, {SelectInputType} from './select'
import textareaInput, {TextareaInputType} from './textarea'
import staticInput, {StaticType} from './static'
import radioInput, {RadioInputType} from './radio'
import checkboxInput, {CheckboxInputType} from './checkbox'
import LinebreakInput, {LinebreakType} from './linebreak'

const schemas = [
  textInput,
  selectInput,
  textareaInput,
  staticInput,
  radioInput,
  checkboxInput,
  LinebreakInput,
]
export default schemas

export type InputTypes =
  | RadioInputType
  | CheckboxInputType
  | SelectInputType
  | StaticType
  | TextInputType
  | TextareaInputType
  | LinebreakType

export const types: {type: string}[] = schemas.map((schema) => ({
  type: schema.name,
}))
