const ProgressBar = ({filled} : {filled: number}) => {

  return (
    <div className="h-2 bg-slate-200 rounded-4xl overflow-hidden">
      <div className={`h-full bg-indigo-600 transition-all duration-50 ease-in-out`} style={{ width: `${filled}%` }}/>
    </div>
  )
}

export default ProgressBar