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

type PutContentParams = {
  filter: string
}
 
type PutContentRequestBody = {
  todoId: number,
  text: string,
}
 
type PutContentResponseBody = {
  msg?: string,
  newTodos?: Todo[],
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

let latestId = 1;

export const handlers = [
    http.get('/api/todos', () => {
        return HttpResponse.json([...todos].reverse())
    }),
    http.post<AddContentParams,
      AddContentRequestBody,
      AddContentResponseBody>('/api/todos', async ({ request }) => {
        const requestBody = await request.json();
        if (todos.some(todo => todo.text === requestBody.text)) return HttpResponse.json({ msg: 'Already added this task. Please be more specific for more efficiency'}, { status: 400 })
        const newTodo: Todo = { id: ++latestId, text: requestBody.text, completed: false, createdAt: new Date().toLocaleString()};
        todos = [...todos, newTodo]
        return HttpResponse.json({ newTodo });
    }),
    http.put<PutContentParams,
      PutContentRequestBody,
      PutContentResponseBody>('/api/todos', async ({ request }) => {
        const requestBody = await request.json();
        const { todoId, text } = requestBody;
        todos = todos.map((todo) => {
          if (todo.id === todoId) {
            if (text)
              return {...todo, text};
            else
              return {...todo, completed: !todo.completed, completedAt: !todo.completed ? new Date().toISOString() : null};
          }
          return todo;
        })
        return HttpResponse.json({ newTodos: [...todos].reverse() });
    }),
    http.delete<PutContentParams,
      PutContentRequestBody,
      PutContentResponseBody>('/api/todos', async ({ request }) => {
        const requestBody = await request.json();
        const { todoId } = requestBody;
        todos = todos.filter(todo => todo.id !== todoId);
        return HttpResponse.json({ newTodos: [...todos].reverse() });
    })
]