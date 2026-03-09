import { useState } from "react";

const Accordian = () => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <>
      <h1 className='text-2xl font-bold mb-4 text-blue-400 uppercase'>Accordian</h1>
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="hover: cursor-pointer"
      >
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
    </>

  )
}

export default Accordian