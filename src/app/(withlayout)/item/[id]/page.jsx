"use client";
import { useDispatch } from "react-redux";
import Image from "next/image";
import { addItemToCart } from "@/redux/features/cartSlice";
import UserReview from "@/components/FoodItem/UserReview";
import toast from "react-hot-toast";
import { useGetFoodItemQuery } from "@/redux/api/foodApi";
import Loading from "@/components/ui/Loading";
import { useRouter } from "next/navigation";
import ReviewInputForm from "@/components/FoodItem/ReviewInputForm";

const ItemDetails = ({ params }) => {
  const { data: item, isLoading } = useGetFoodItemQuery(+params.id);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleAddtoCart = (item) => {
    dispatch(addItemToCart(item));
    toast.success(`${item.name} added to cart`);
  };

  const handleAddOrder = (item) => {
    dispatch(addItemToCart(item));
    router.push("/item/cart");
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="bg-white rounded shadow-xl p-4 w-full max-w-5xl mx-auto">
      {item && (
        <>
          <h2 className="text-3xl font-semibold">{item.name}</h2>

          {/* Description */}
          {item.description && (
            <p className="text-gray-600 mt-4">{item.description}</p>
          )}

          {/* Image Gallery */}
          {item.image && (
            <div className="mt-4">
              <Image
                src={item.image}
                alt={item.name}
                className="mb-2 rounded w-full"
                height={1000}
                width={1000}
              />
            </div>
          )}

          {/* Pricing and Availability */}
          <div className="mt-4">
            <p className="text-xl text-yellow-500 font-semibold">
              ${item.price.toFixed(2)}
            </p>
            <p className="text-gray-600 mt-2">
              Availability: {item.available ? "In Stock" : "Out of Stock"}
            </p>
          </div>

          {/* Location and Contact Information */}
          {item.location && (
            <div className="mt-4">
              <p className="text-gray-600">Location: {item.location}</p>
              <p className="text-gray-600">Contact: {item.contactInfo}</p>
            </div>
          )}

          {/* Share and Call-to-Action Buttons */}
          <div className="mt-4">
            <button
              onClick={() => handleAddOrder(item)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-4"
            >
              Order Now
            </button>
            <button
              onClick={() => handleAddtoCart(item)}
              className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded hover-bg-green-600"
            >
              Add to Cart
            </button>
          </div>

          {/* User Reviews and Ratings */}
          {item.reviews && item.reviews.length > 0 && (
            <div className="mt-4">
              <p className="text-gray-600">Rating: {item?.rating || 4.5}/5</p>
              <ul>
                {item.reviews.map((review, index) => (
                  <UserReview key={index} review={review} />
                ))}
              </ul>
            </div>
          )}
          <div>
            <ReviewInputForm />
          </div>

          {/* Additional Details and User-generated Content */}
          {item.additionalDetails && (
            <div className="mt-4">
              <h3 className="text-2xl font-semibold">Additional Details</h3>
              <p className="text-gray-600">{item.additionalDetails}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ItemDetails;
