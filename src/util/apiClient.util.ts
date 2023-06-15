import axios from 'axios'

// const BASE_PATH = 'http://localhost:8000'
const BASE_PATH = 'https://job-pathfinder-backend.onrender.com/'

export enum HttpMethod {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
}

interface Params<BODY extends Record<string, unknown> | undefined> {
    method: HttpMethod
    path: string
    body?: BODY
    query?: Record<string, string>
}

interface Return<BODY extends Record<string, unknown> | undefined, RESPONSE> {
    call: (params: Params<BODY>) => Promise<RESPONSE>
}

export const apiClient = <
    BODY extends Record<string, unknown> | undefined,
    RESPONSE
>(): Return<BODY, RESPONSE> => {
    return {
        call: async (params) => {
            const { method, path, body, query } = params
            const url = new URL(path, BASE_PATH)
            if (query) {
                Object.entries(query).forEach(([key, value]) => {
                    url.searchParams.append(key, value)
                })
            }
            const response = await axios(url.toString(), {
                method,
                data: body ?? undefined,
            })
            return response.data
        },
    }
}
