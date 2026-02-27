import { createContext, useState, type ReactNode, useContext, useEffect } from "react";
import type { Todo } from "../../types/Todo";

const TodoContext = createContext<{ 
    todos: Todo[],
    isLoading: boolean,
    isError: boolean,
    errorMsg: string,
    addTodo: (text: string) => void,
}>({
    todos: [],
    isLoading: false,
    isError: false,
    errorMsg: '',
    addTodo: () => {},
});

export const TodoProvider = ({children}: {children: ReactNode}) => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        setIsLoading(true);
        fetch(import.meta.env.VITE_API_URL + '/api/todos')
        .then((res) => {
            res.json().then((data) => setTodos(data))
            .catch(() => setIsError(true))
            .finally(() => setIsLoading(false));
        })
    }, [])

    const addTodo = (text: string) => {
        const newTodo = {text};
        setIsLoading(true);
        fetch(import.meta.env.VITE_API_URL + '/api/todos', { 
            method: 'Post',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'big_1'
            },
            body: JSON.stringify(newTodo)
        }).then((res) => {
            setErrorMsg('');
            setIsLoading(false);
            if (res.status === 200)
                res.json().then((data) => setTodos([data.newTodo, ...todos]));
            else
                res.json().then((data) => setErrorMsg(data.msg));
        });
    }

    return (
        <TodoContext.Provider value={{todos, isLoading, isError, errorMsg, addTodo}}>
            {children}
        </TodoContext.Provider>
    )
}

export const useTodos = () => {
    const context = useContext(TodoContext);
    return context;
}

export default TodoContext;