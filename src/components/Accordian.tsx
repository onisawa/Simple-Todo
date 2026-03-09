import { useState } from "react";

const Accordian = () => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <>
      <h1 className='text-2xl font-bold mb-4 text-blue-400 uppercase'>Accordian</h1>
      <div className="p-4 bg-gray-100 rounded-lg shadow-md">
        <button
          onClick={() => setAccordionOpen(!accordionOpen)}
          className="w-full flex justify-between items-center hover:cursor-pointer"
        >
          <span className="font-bold text-xl">Question ?</span>
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
        <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen ? 'p-2 grid-rows-[1fr] opacity: 100%' : 'grid-rows-[0fr] opacity: 0%'
        }`}>
          <span className="overflow-hidden">Answer</span>
        </div>
      </div>
    </>

  )
}

export default Accordian