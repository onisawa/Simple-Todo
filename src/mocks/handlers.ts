import { http, HttpResponse } from "msw";
import type { Todo } from "../types/Todo";

type AddContentParams = {
  filter: string
}
 
type AddContentRequestBody = {
  text: string
}
 
type AddContentResponseBody = {
  msg?: string,
  newTodo?: Todo,
}

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
       http.post<AddContentParams,
      AddContentRequestBody,
      AddContentResponseBody>('/api/todos', async ({ request }) => {
        const requestBody = await request.json();
        if (todos.some(todo => todo.text === requestBody.text)) return HttpResponse.json({ msg: 'Already added this task. Please be more specific for more efficiency'}, { status: 400 })
        const newTodo: Todo = { id: todos.length, text: requestBody.text, completed: false, createdAt: new Date().toLocaleString()};
        todos = [...todos, newTodo]
        return HttpResponse.json({ newTodo });
    }),
]