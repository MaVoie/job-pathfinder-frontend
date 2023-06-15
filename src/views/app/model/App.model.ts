export interface AppModel extends Record<string, string> {
    name: string
    surname: string
    email: string
    location: string
    customer_message: string
}

export interface AppProcessResponse extends Record<string, unknown>{
    process_id: string
    proposed_positions: string[]
}
