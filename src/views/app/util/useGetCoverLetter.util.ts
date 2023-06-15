import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { QueryKeyEnum } from '../../../model/QueryKey.enum.ts'
import { apiClient, HttpMethod } from '../../../util/apiClient.util.ts'

interface Body extends Record<string, unknown> {
    selected_position: string
}

type Response = string[]

interface Params {
    body: Body
    processId: string
}

type Return = {
    getCoverLetters: (params: Params) => Promise<Response>
    data: Response | undefined
    isLoading: boolean
    isError: boolean
}

export const useGetCoverLetter = (): Return => {
    const { call } = apiClient<Body, Response>()
    const { mutateAsync, isLoading, isError, data } = useMutation<
        Response,
        AxiosError,
        Params
    >({
        mutationKey: [QueryKeyEnum.COVER_LETTERS_GET],
        mutationFn: async (request) => {
            return call({
                method: HttpMethod.POST,
                path: `/processes/${request.processId}/generate-cover-letters`,
                body: request.body,
            })
        },
    })

    return {
        getCoverLetters: mutateAsync,
        isLoading,
        isError,
        data,
    }
}
