
import { useState } from "react";

const ComponentsPage = () => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <section className='flex flex-col gap-y-2 mx-auto mt-10 py-10 px-20'>
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
    </section>
  )
}

export default ComponentsPage