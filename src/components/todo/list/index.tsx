import { useTodos } from "../../../contexts/todo"

const TodoList = () => {
    const { todos } = useTodos()

    return (
        <div className="relative mt-4">
            {todos.map((todo) => (
                <div key={todo.id} className="flex items-center mb-2">
                    <input type="text" defaultValue={todo.text} className={`ml-2 text-lg flex-1 ${todo.completed ? 'text-gray-400 line-through' : 'text-black'}`} />
                </div>
            ))}
        </div>
    )
}

export default TodoList