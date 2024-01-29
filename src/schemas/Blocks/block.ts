import document, { DocumentType } from '../document'

export interface BlockType extends Omit<DocumentType, 'date, coverImage, description'> {
    _id: string
    _type: string
}

const block = [
    ...document.filter(field => field.name !== 'date' && field.name !== 'coverImage').map(field => {
        if (field.name === 'image' || field.name === 'description') {
            delete field.validation
        }
        return field
    })
]
export default block

export const prefix = 'Block | '