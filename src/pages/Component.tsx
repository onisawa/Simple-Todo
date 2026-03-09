
import Accordian from "@/components/Accordian";
import { useParams } from "react-router-dom";

const ComponentsPage = () => {
  const { componentId } = useParams();

  return (
    <section className='flex flex-col gap-y-2 mx-auto mt-10 py-10 px-20'>
      {
        (!componentId || componentId === 'accordian') && <Accordian /> 
      }
    </section>
  )
}

export default ComponentsPage