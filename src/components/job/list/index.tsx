import { useState } from "react";
import JobPost from "./jobPost";

const ITEM_PER_PAGE = 6;

const EXAMPLE_RES = {
  "by": "jamilbk",
  "id": 35908337,
  "score": 1,
  "time": 1683838872,
  "title": "Firezone (YC W22) is hiring Elixir and Rust engineers",
  "type": "job",
  "url": "https://www.ycombinator.com/companies/firezone/jobs"
}

const JobList = () => {
    const [items, setItems] = useState([EXAMPLE_RES, EXAMPLE_RES]);

    return (
        <>
            {
                items.length < 1 ? (
                    <p className="">Loading...</p>
                ) : (
                    <div>
                        <div className="" role="list">
                            {items.map((item) => (<JobPost key={item.id} {...item} />))}
                        </div>
                        <button>Load more jobs</button>
                    </div>
                )
            }
        </>
    )
}

export default JobList