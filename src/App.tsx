import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import TodoList from "./components/todo/list"
import { useTodos } from "./contexts/todo";
import AddTodo from "./components/todo/add";
import ConfirmModal from "./components/todo/common/confirmModal";

function App() {
  const {isError} = useTodos();

  return (
    <>
     <section className='relative flex flex-col gap-y-2 mx-auto mt-10'>
          {isError && (
                <div className="absolute w-full h-full flex justify-center items-center bg-white/80 text-red-500">
                  <ExclamationCircleIcon className='size-6' />
                  <h1 className='px-1.5'>Something went wrong, Please try again.</h1>
                </div>
            )}
          <div className='px-20'>
            <h1 className='text-2xl font-bold mb-4'>Todo List</h1>
            <AddTodo />
            <TodoList />
            <ConfirmModal />
          </div>
        </section>      
    </>
  )
}

export default App
