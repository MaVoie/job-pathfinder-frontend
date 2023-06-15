import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { QueryKeyEnum } from '../../../model/QueryKey.enum.ts'
import { apiClient, HttpMethod } from '../../../util/apiClient.util.ts'

interface Response {
    questions: string[]
}

interface Params {
    processId: string
}

type Return = {
    getInterviewQuestions: (params: Params) => Promise<Response>
    data: Response | undefined
    isLoading: boolean
    isError: boolean
}

export const useGetInterviewQuestions = (): Return => {
    const { call } = apiClient<undefined, Response>()
    const { mutateAsync, isLoading, isError, data } = useMutation<
        Response,
        AxiosError,
        Params
    >({
        mutationKey: [QueryKeyEnum.INTERVIEW_QUESTIONS_GET],
        mutationFn: async (request) => {
            return call({
                method: HttpMethod.GET,
                path: `/processes/${request.processId}/interview-questions`,
            })
        },
    })

    return {
        getInterviewQuestions: mutateAsync,
        isLoading,
        isError,
        data,
    }
}
