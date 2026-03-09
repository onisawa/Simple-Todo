
import AccordianPage from "@/pages/AccordianPage";
import ProgressBarPage from "@/pages/ProgressBarPage";
import StarRatingPage from "@/pages/StarRatingPage";
import { useParams } from "react-router-dom";

const ComponentsPage = () => {
  const { componentId } = useParams();

  return (
    <section className='flex flex-col gap-y-2 mx-auto mt-10 py-10 px-20'>
      {
        (!componentId || componentId === 'accordian') && <AccordianPage /> 
      }
      {
        (!componentId || componentId === 'progressbar') && <ProgressBarPage /> 
      }
      {
        (!componentId || componentId === 'starRating') && <StarRatingPage /> 
      }
    </section>
  )
}

export default ComponentsPage