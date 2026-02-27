import { http, HttpResponse } from "msw";
import type { Todo } from "../types/Todo";

let todos: Todo[] = [
  {
    id: 0,
    text: 'Design solutions following requirements',
    completed: false,
    createdAt: new Date().toLocaleString(),
  },
  {
    id: 1,
    text: 'R&D technology according to the design',
    completed: false,
    createdAt: new Date().toLocaleString(),
  }
]

export const handlers = [
    http.get('/api/todos', () => {
        return HttpResponse.json([...todos].reverse())
    }),
]