import { useState, type SubmitEvent } from 'react'
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { useTodos } from '../../../contexts/todo';

const AddTodo = () => {

    const [text, setText] = useState('')

    const { addTodo, isLoading, errorMsg } = useTodos()

    const submitHandler = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!text.trim()) return;
        addTodo(text);
        setText('');
    }

    return (
        <>
            <form onSubmit={submitHandler} className='flex flex-row gap-x-2 justify-between'>
                <input type='text' value={text} placeholder='Add a new todo' onChange={(e) => setText(e.target.value)} className='form-input w-full rounded-md border shadow-sm p-4' />
                <button type='submit' className='w-32 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded' disabled={isLoading}>
                    {isLoading ? (
                    <div className="grid place-items-center rounded-lg lg:overflow-visible">
                        <svg className="text-gray-300 animate-spin" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24">
                            <path
                            d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                            stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path
                            d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                            stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                            </path>
                        </svg>
                        </div> ) : 'Add Todo'}
                </button>
            </form>

            {errorMsg && (
                <div className="text-red-500 flex py-1.5">
                    <ExclamationCircleIcon className='size-6' />
                    <h1 className='px-1.5'>{errorMsg}</h1>
                </div>
            )}
        </>
    )
}

export default AddTodo