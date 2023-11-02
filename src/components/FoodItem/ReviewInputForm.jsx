import { useAddReviewMutation } from "@/redux/api/foodApi";
import { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const ReviewInputForm = ({ itemId }) => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const { user } = useSelector((state) => state.auth);
  const [addReview] = useAddReviewMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const review = { userEmail: user.email, rating, comment };
    setComment("");
    console.log({ review });
    const res = await addReview({ id: itemId, review });
    if (res.data) {
      toast.success("Thanks For Your Review");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-lg mt-5 md:mt-8">
      <h2 className="text-xl font-semibold mb-4">Leave a Review</h2>
      <div className="mb-4">
        <label className="block font-medium">Rate:</label>
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setRating(value)}
              className={`text-2xl ${
                rating >= value ? "text-yellow-500" : "text-gray-300"
              }`}
            >
              ★
            </button>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-2">Comment:</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="border rounded-md px-3 py-2 w-full"
          rows="2"
          required
        />
      </div>
      <button type="submit" className="btn btn-warning text-white">
        Submit Review
      </button>
    </form>
  );
};

export default ReviewInputForm;
