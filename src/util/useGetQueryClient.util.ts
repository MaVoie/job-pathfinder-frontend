import { QueryClient } from '@tanstack/react-query'
import { useMemo } from 'react'
import { toast } from 'react-toastify'

export const useGetQueryClient = (): QueryClient => {
    return useMemo(() => {
        return new QueryClient({
            defaultOptions: {
                queries: {
                    refetchOnWindowFocus: false,
                    retry: false,
                    onError: () => {
                        toast('Unexpected error occurred')
                    },
                },
                mutations: {
                    retry: false,
                    onError: () => {
                        toast('Unexpected error occurred')
                    },
                },
            },
        })
    }, [])
}
