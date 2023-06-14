import { ValidationSchema } from '../../../model/Validation.schema.ts'
import { ContactModel } from './Contact.model.ts'
import { object, string } from 'yup'

export const useContactValidation = (): ValidationSchema<ContactModel> => {
    return object({
        name: string().required(),
        email: string().email().required(),
        message: string().required(),
    })
}
