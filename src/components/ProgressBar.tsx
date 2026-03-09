import { useEffect, useState } from "react";

const ProgressBar = () => {
    const [filled, setFilled] = useState(0);

    useEffect(() => {
      if (filled < 100) 
        setTimeout(() => setFilled(prev => prev+=5), 50)
      else
        setTimeout(() => setFilled(0), 1000)

    }, [filled])
  
  return (
    <div className="h-2 bg-slate-200 rounded-4xl overflow-hidden">
      <div className={`h-full bg-indigo-600 transition-all duration-50 ease-in-out`} style={{ width: `${filled}%` }}/>
    </div>
  )
}

export default ProgressBar