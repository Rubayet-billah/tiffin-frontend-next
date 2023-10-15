import {
  decrementQuantity,
  incrementQuantity,
  deleteItemFromCart,
  isCheckedForOrder,
} from "@/redux/features/cartSlice";
import Image from "next/image";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineDelete } from "react-icons/ai";

const CartTable = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleIncrement = (itemId) => {
    dispatch(incrementQuantity(itemId));
  };

  const handleDecrement = (itemId) => {
    dispatch(decrementQuantity(itemId));
  };

  const handleCheckOrder = (itemId) => {
    dispatch(isCheckedForOrder(itemId));
  };

  const neatTotalPrice = cartItems
    .filter((item) => item.isCheckedForOrder) // Filter items that are marked for order
    .reduce((total, item) => {
      const itemPrice = item.price; // Assuming each item has a `price` property
      const itemQuantity = item.quantityInCart; // Assuming each item has a `quantityInCart` property
      return total + itemPrice * itemQuantity;
    }, 0);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cartItems?.map((item) => (
              <tr key={item.id}>
                <td>
                  <label>
                    <input
                      onClick={() => handleCheckOrder(item.id)}
                      type="checkbox"
                      className="checkbox"
                      defaultChecked
                    />
                  </label>
                </td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <Image
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                          height={200}
                          width={200}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.name}</div>
                      <div className="text-sm opacity-50">{item.location}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="flex items-center space-x-3">
                    <button
                      className="btn btn-xs btn-outline"
                      onClick={() => handleDecrement(item.id)}
                    >
                      -
                    </button>
                    <span className="mx-1">{item.quantityInCart}</span>
                    <button
                      className="btn btn-xs btn-outline"
                      onClick={() => handleIncrement(item.id)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>${item.price.toFixed(2) * +item.quantityInCart}</td>
                <td>
                  <button className="btn btn-ghost btn-xs">Details</button>
                </td>
                <td>
                  <button
                    onClick={() => dispatch(deleteItemFromCart(item.id))}
                    className="btn btn-error text-white text-2xl"
                  >
                    <AiOutlineDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <div className="text-xl font-bold mt-auto">
            Total Price: {neatTotalPrice.toFixed(2)}
          </div>
        </table>
      </div>
    </div>
  );
};

export default CartTable;
