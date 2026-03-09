import ProgressBar from "@/components/ProgressBar"
import StepProgressBar from "@/components/StepProgressBar"

const ProgressBarPage = () => {
  return (
    <>
      <h1 className='text-2xl font-bold my-4 text-blue-400 uppercase'>Progress Bar</h1>
      <ProgressBar />
      <StepProgressBar numberOfStep={2} color="#2196F3" />
      <StepProgressBar numberOfStep={3} color="#00BCD4" />
      <StepProgressBar numberOfStep={5} color="#E91E63" />
    </>
  )
}

export default ProgressBarPage