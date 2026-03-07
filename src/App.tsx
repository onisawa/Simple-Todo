import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import TodoList from "./components/todo/list"
import { useTodos } from "./contexts/todo";
import AddTodo from "./components/todo/add";
import ConfirmModal from "./components/todo/common/confirmModal";
import JobList from "./components/job/list";
import { useState } from "react";

function App() {
  const {isError} = useTodos();
  const [accordionOpen, setAccordionOpen] = useState(false);

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

      <button className="hover:cursor-pointer" onClick={() => setAccordionOpen(!accordionOpen)}>
      <svg
          className="fill-indigo-500 shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "rotate-180!"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "rotate-180!"
            }`}
          />
        </svg>
        </button>     

      <section className='relative flex flex-col gap-y-2 mx-auto mt-10 py-10 bg-amber-50'>
        <div className='px-20'>
          <h1 className='text-2xl font-bold mb-4 text-orange-400'>Hacker News Job Board</h1>
          <JobList />
        </div>
      </section>
    </>
  )
}

export default App
