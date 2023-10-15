import Image from "next/image";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

const CartTable = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleIncrement = (itemId) => {
    // dispatch(incrementQuantity(itemId));
  };

  const handleDecrement = (itemId) => {
    // dispatch(decrementQuantity(itemId));
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
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
                    <input type="checkbox" className="checkbox" />
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
                <td>${item.price.toFixed(2)}</td>
                <td>
                  <button className="btn btn-ghost btn-xs">Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartTable;
