import { ValidationSchema } from '../../../model/Validation.schema.ts'
import { AppModel } from './App.model.ts'
import { object, string } from 'yup'

export const useAppValidation = (): ValidationSchema<AppModel> => {
    return object({
        name: string().required(),
        surname: string().required(),
        email: string().email().required(),
        location: string().required(),
        customer_message: string().required(),
    })
}
