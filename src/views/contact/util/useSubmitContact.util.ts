import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { ContactModel } from '../model/Contact.model.ts'
import { QueryKeyEnum } from '../../../model/QueryKey.enum.ts'

type Return = {
    submitContact: (request: ContactModel) => Promise<void>
    isLoading: boolean
    isError: boolean
}

export const useSubmitContact = (): Return => {
    const { mutateAsync, isLoading, isError } = useMutation<
        void,
        AxiosError,
        ContactModel
    >({
        mutationKey: [QueryKeyEnum.SUBMIT_CONTACT],
        mutationFn: async (request) => {
            console.debug('request', request)
        },
    })

    return {
        submitContact: mutateAsync,
        isLoading,
        isError,
    }
}
