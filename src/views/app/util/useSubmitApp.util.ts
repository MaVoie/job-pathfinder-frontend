import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { AppModel, AppProcessResponse } from '../model/App.model.ts';
import { QueryKeyEnum } from '../../../model/QueryKey.enum.ts'
import { apiClient, HttpMethod } from '../../../util/apiClient.util.ts';

type Return = {
    submitApp: (request: AppModel) => Promise<AppProcessResponse>
    data: AppProcessResponse | undefined,
    isLoading: boolean
    isError: boolean
}

export const useSubmitApp = (): Return => {
    const { call } = apiClient<AppModel, AppProcessResponse>();
    const { mutateAsync, isLoading, isError, data } = useMutation<
        AppProcessResponse,
        AxiosError,
        AppModel
    >({
        mutationKey: [QueryKeyEnum.SUBMIT_APP],
        mutationFn: async (request) => {
            return call({
                method: HttpMethod.POST,
                path: '/processes',
                body: request,
            });
        },
    })

    return {
        submitApp: mutateAsync,
        isLoading,
        isError,
        data,
    }
}
