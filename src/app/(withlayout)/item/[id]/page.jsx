"use client";
import { addItemToCart } from "@/redux/features/cartSlice";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

const ItemDetails = ({ params }) => {
  const { foodItems } = useSelector((state) => state.food);
  const dispatch = useDispatch();
  const item = { ...foodItems?.find((item) => item.id == +params.id) };
  item.location = "Dhaka,bangladesh";
  item.contactInfo = "+8801875685814";
  item.available = true;

  return (
    <div className="bg-white rounded shadow-xl p-4 w-full max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold">{item.name}</h2>

      {/* Description */}
      <p className="text-gray-600 mt-4">{item.description}</p>

      {/* Image Gallery */}
      <div className="mt-4">
        <Image
          src={item.image}
          alt={item.name}
          className="mb-2 rounded w-full"
          height={1000}
          width={1000}
        />
      </div>

      {/* Pricing and Availability */}
      <div className="mt-4">
        <p className="text-xl text-yellow-500 font-semibold">${item.price}</p>
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

      {/* User Reviews and Ratings */}
      {item.rating && (
        <div className="mt-4">
          <p className="text-gray-600">Rating: {item.rating}/5</p>
          {/* User reviews can be displayed here */}
        </div>
      )}

      {/* Related Content/Services */}
      <div className="mt-4">
        <h3 className="text-2xl font-semibold">Related Items</h3>
        {/* Display related content or services */}
      </div>

      {/* Booking/Reservation Options */}
      <div className="mt-4">
        <h3 className="text-2xl font-semibold">Booking/Reservation Options</h3>
        {/* Display booking or reservation options */}
      </div>

      {/* Share and Call-to-Action Buttons */}
      <div className="mt-4">
        <Link
          href={`/item/order`}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-4"
        >
          Order Now
        </Link>
        <button
          onClick={() => dispatch(addItemToCart(item))}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Add to Cart
        </button>
      </div>

      {/* Additional Details and User-generated Content */}
      <div className="mt-4">
        <h3 className="text-2xl font-semibold">Additional Details</h3>
        <p className="text-gray-600">{item.additionalDetails}</p>

        {/* User-generated content can be displayed here */}
      </div>
    </div>
  );
};

export default ItemDetails;
