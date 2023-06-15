import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { QueryKeyEnum } from '../../../model/QueryKey.enum.ts'
import { apiClient, HttpMethod } from '../../../util/apiClient.util.ts'

interface Response {
    evaluation: 'string'
}

interface Body extends Record<string, unknown> {
    question: string
    answer: string
}

interface Params {
    processId: string
    body: Body
}

type Return = {
    submit: (params: Params) => Promise<Response>
    data: Response | undefined
    isLoading: boolean
    isError: boolean
}

export const useSubmitInterviewAnswer = (): Return => {
    const { call } = apiClient<Body, Response>()
    const { mutateAsync, isLoading, isError, data } = useMutation<
        Response,
        AxiosError,
        Params
    >({
        mutationKey: [QueryKeyEnum.INTERVIEW_QUESTIONS_SUBMIT],
        mutationFn: async (request) => {
            return call({
                method: HttpMethod.POST,
                path: `/processes/${request.processId}/interview-questions-answer`,
                body: request.body,
            })
        },
    })

    return {
        submit: mutateAsync,
        isLoading,
        isError,
        data,
    }
}
