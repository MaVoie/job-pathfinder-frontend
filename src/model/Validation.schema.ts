import { Maybe, ObjectSchema } from 'yup'

type AnyObject = {
    [k: string]: any
}

export type ValidationSchema<T extends Maybe<AnyObject>> = ObjectSchema<
    T,
    AnyObject,
    Partial<T>,
    ''
>
