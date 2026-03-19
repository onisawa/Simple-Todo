import { StarIcon } from "@heroicons/react/24/outline"
import { useState } from "react";

const StarRating = ({ numberOfStar, defaultScore = 0 } : { numberOfStar: number, defaultScore?: number }) => {
  const [score, setScore] = useState(defaultScore);
  const [scoreHovered, setScoreHovered] = useState(0);

  return (
    <div className="p-4 w-fit bg-gray-100 rounded-lg shadow-md flex">
      {
        Array.from({ length: numberOfStar }).map((_, index) => {
          const star = index + 1;
          const isActive = scoreHovered ? star <= scoreHovered : star <= score;
          
          return (
            <StarIcon key={star} onMouseLeave={() => setScoreHovered(0)} onMouseEnter={() => setScoreHovered(star)} onClick={() => setScore(star)} className={`size-10 sm:size-12 md:size-14 hover:cursor-pointer ${isActive ? 'text-amber-300 fill-amber-300' : 'text-slate-300'} transition-colors duration-150 ease-in-out`} />
        )})
      }
    </div>
  )
}

export default StarRating