import type { Job } from "../../../types/Job"

const JobPost = ({ title, url, by, time } : Job) => {

    return (
        <div className=" bg-white border-gray-100 border-2 rounded-sm p-4" role="listItem">
					<a 
						className={ url ? "text-xl font-bold hover:underline" : "text-xl font-bold cursor-default"}
						href={url}
						target="_blank"
						rel="noopener"
					>{title}</a>
					<span className="block mt-2 text-sm text-gray-600">
						By {by} - {new Date(time * 1000).toLocaleString()}
					</span>
        </div>
    )
}

export default JobPost