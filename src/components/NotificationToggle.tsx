import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const NotificationToggle = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <label className={`cursor-pointer ${isActive ? 'bg-green-400' : 'bg-red-400'} w-20 h-10 rounded-4xl flex items-center`}>
        <input type="checkbox" className="sr-only peer" onClick={() => setIsActive(!isActive)} />
        <span className="bg-white w-2/5 h-4/5 rounded-4xl ml-1 peer-checked:ml-11 transition-all duration-300 ease-in-out" />
      </label>
      <div className="flex">
        <div>
          { isActive ? <CheckCircleIcon className="size-6 text-white fill-green-400" /> : <XCircleIcon className="size-6 text-white fill-red-600" /> }
        </div>
        Notifications are {isActive ? 'enabled' : 'disabled'}
      </div>
    </>
  )
}

export default NotificationToggle