import type { Job } from "../../../types/Job"

const JobPost = ({ title, url, by, time } : Job) => {

    return (
        <div className="grid grid-rows-2 gap-2 bg-white border-gray-100 border-2 rounded-sm p-4" role="listItem">
					<a 
						className={ url ? "text-xl font-bold hover:underline" : "text-xl font-bold cursor-default"}
						href={url}
						target="_blank"
						rel="noopener"
					>{title}</a>
					<span className="text-sm text-gray-600">
						By {by} - {new Date(time * 1000).toLocaleString()}
					</span>
        </div>
    )
}

export default JobPost