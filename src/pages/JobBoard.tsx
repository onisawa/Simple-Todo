import JobList from "@components/job/list";

const JobBoardPage = () => {
  return (
      <section className='relative flex flex-col gap-y-2 mx-auto py-10 bg-amber-50'>
        <div className='px-10 md:px-20'>
          <h1 className='text-2xl font-bold mb-4 text-orange-400'>Hacker News Job Board</h1>
          <JobList />
        </div>
      </section>
  )
}

export default JobBoardPage