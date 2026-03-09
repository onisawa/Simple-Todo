import StarRating from "@/components/StarRating"

const StarRatingPage = () => {
  return (
    <>
      <h1 className='text-2xl font-bold my-4 text-blue-400 uppercase'>Star Rating</h1>
      <div className="flex justify-center">
        <StarRating numberOfStar={5} />
      </div>
      <div className="flex justify-center">
        <StarRating numberOfStar={10} />
      </div>
      <div className="flex justify-center">
        <StarRating numberOfStar={5} defaultScore={3} />
      </div>
    </>
  )
}

export default StarRatingPage