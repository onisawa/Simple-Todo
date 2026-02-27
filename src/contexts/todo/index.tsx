import { createContext, useState, type ReactNode, useContext, useEffect } from "react";
import type { Todo } from "../../types/Todo";

const TodoContext = createContext<{ 
    todos: Todo[] 
}>({
    todos: []
});

const mockTodos: Todo[] = [
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

export const TodoProvider = ({children}: {children: ReactNode}) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        console.log(mockTodos);
        setTodos(mockTodos);
    }, [])

    return (
        <TodoContext.Provider value={{todos}}>
            {children}
        </TodoContext.Provider>
    )
}

export const useTodos = () => {
    const context = useContext(TodoContext);
    return context;
}

export default TodoContext;