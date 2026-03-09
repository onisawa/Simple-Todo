import ProgressBar from "@/components/ProgressBar"
import StepProgressBar from "@/components/StepProgressBar"
import { useEffect, useState } from "react";

const ProgressBarPage = () => {
  const [filled, setFilled] = useState(0);

  useEffect(() => {
    if (filled < 100) 
      setTimeout(() => setFilled(prev => prev+=5), 50)
    else
      setTimeout(() => setFilled(0), 1000)

  }, [filled])

  return (
    <>
      <h1 className='text-2xl font-bold my-4 text-blue-400 uppercase'>Progress Bar</h1>
      <ProgressBar filled={filled} />
      <StepProgressBar filled={filled} numberOfStep={2} color="#2196F3" />
      <StepProgressBar filled={filled} numberOfStep={3} color="#00BCD4" />
      <StepProgressBar filled={filled} numberOfStep={5} color="#E91E63" />
    </>
  )
}

export default ProgressBarPage