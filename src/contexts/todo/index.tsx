import { createContext, useState, type ReactNode, useContext, useEffect } from "react";
import type { Todo } from "../../types/Todo";

const TodoContext = createContext<{ 
    todos: Todo[] 
}>({
    todos: []
});

export const TodoProvider = ({children}: {children: ReactNode}) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        fetch(import.meta.env.VITE_API_URL + '/api/todos')
            .then((res) => res.json().then((data) => setTodos(data))
        )
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