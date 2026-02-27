import { createContext, useState, type ReactNode, useContext, useEffect } from "react";
import type { Todo } from "../../types/Todo";

const TodoContext = createContext<{ 
    todos: Todo[],
    isLoading: boolean,
    isError: boolean,
}>({
    todos: [],
    isLoading: false,
    isError: false,
});

export const TodoProvider = ({children}: {children: ReactNode}) => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(import.meta.env.VITE_API_URL + '/api/todos')
        .then((res) => {
            res.json().then((data) => setTodos(data))
            .catch(() => setIsError(true))
            .finally(() => setIsLoading(false));
        })
    }, [])

    return (
        <TodoContext.Provider value={{todos, isLoading, isError}}>
            {children}
        </TodoContext.Provider>
    )
}

export const useTodos = () => {
    const context = useContext(TodoContext);
    return context;
}

export default TodoContext;