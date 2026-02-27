export interface Todo {
    id: number,
    text: string,
    completed: boolean,
    createdAt?: string | null,
    completedAt?: string | null
}