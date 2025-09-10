interface Message {
    id: number;
    recipient: string;
    message: string;
    songID: string;
    created_at: string;
}

export type { Message };