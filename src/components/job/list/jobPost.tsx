import type { Job } from "../../../types/Job"

const JobPost = ({ title, url, by, time } : Job) => {

    return (
        <div className="" role="listItem">
            <h2 className="">
                <a 
                  className={ url ? "" : ""}
                  href={url}
									target="_blank"
									rel="noopener"
                >{title}</a>
								<span>
									By {by} - {new Date(time * 1000).toLocaleString()}
								</span>
            </h2>
        </div>
    )
}

export default JobPost