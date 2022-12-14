export type Chat = {
    id: number;
    participants: number[];
    messages: ChatMessage[];
}

export type ChatMessage = {
    id: number;
    chatId: number;
    authorId: number;
    message: string;
}