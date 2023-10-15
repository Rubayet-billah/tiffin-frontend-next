"use client";
import CartTable from "@/components/ui/CartTable";
import PageHeading from "@/components/ui/PageHeading";
import { addOrder } from "@/redux/features/orderSlice";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const CartPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    notes: "",
  });
  const { cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const orderedItems = cartItems?.filter((item) => item.isCheckedForOrder);
    const userInfo = {
      email: user?.email,
      ...formData,
    };
    if (orderedItems?.length > 0) {
      const order = {
        userInfo,
        orderItems: orderedItems,
      };
      dispatch(addOrder(order));
    } else {
      toast.error("Please select an item first");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-4 w-full mx-auto">
      <PageHeading title="Place Your Order" subTitle="Fill in the Details" />

      <section className="lg:flex justify-between gap-12">
        <div className="w-full">
          <CartTable />
        </div>
        <form onSubmit={handleSubmit} className="w-full max-w-md mt-4">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="location" className="block text-gray-600">
              Delivery Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="notes" className="block text-gray-600">
              Additional Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows="4"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded-lg py-2 hover:bg-blue-600"
          >
            Place Order
          </button>
        </form>
      </section>
    </div>
  );
};

export default CartPage;
