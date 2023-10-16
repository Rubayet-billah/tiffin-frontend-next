import { BsStarFill } from "react-icons/bs";

const UserReview = ({ review }) => {
  const rating = Number(review?.rating) || 4.5;
  const isValidRating = !isNaN(rating) && rating >= 0 && rating <= 5;

  return (
    <div className="flex flex-col gap-2 my-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 font-bold">
          <div className="w-7 h-7 text-center rounded-full bg-red-500 grid place-items-center uppercase text-white">
            {review?.userEmail[0]}
          </div>
          <span>{review?.userEmail}</span>
        </div>
        <div className="flex p-1 gap-1 text-yellow-500">
          {isValidRating
            ? Array.from({ length: rating }, (_, index) => (
                <BsStarFill key={index} />
              ))
            : null}
        </div>
      </div>
      <div>{review?.comment}</div>
    </div>
  );
};

export default UserReview;
