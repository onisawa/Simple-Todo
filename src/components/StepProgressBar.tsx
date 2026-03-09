const StepProgressBar = ({numberOfStep, color, filled} : {numberOfStep: number, color: string, filled: number}) => {

  return (
    <>
      <div className="pt-10">
        <div className="h-2 bg-slate-200 rounded-4xl overflow-hidden">
          <div className={`h-full transition-all duration-50 ease-in-out`} style={{ width: `${filled}%`, backgroundColor: color }}/>
        </div>
        <div className="-mt-6 flex justify-evenly">
          {
            Array.from({ length: numberOfStep}).map((_, index) => {
              const step = index + 1;
              const isActive = filled >= (100/(numberOfStep+1)) * step;
              
              return (
                <div className="flex justify-center items-center w-10 h-10 rounded-4xl text-xl transition-colors duration-150 ease-in-out" style={{ backgroundColor: isActive ? color : '#e2e8f0', color: isActive ? '#ffffff' : color }}>
                  <span>{step}</span>
                </div>
            )})
          }
        </div>
      </div>
    </>
  )
}

export default StepProgressBar