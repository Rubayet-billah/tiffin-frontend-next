"use client";
import Image from "next/image";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useSelector } from "react-redux";

const OrderTable = () => {
  const { user } = useSelector((state) => state.auth);
  const { orders } = useSelector((state) => state.order);
  console.log(user, orders, "from orderTable");
  const myOrders = orders?.filter((order) => order.user.email === user.email);
  return (
    <div>
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
          {myOrders?.map((item) => (
            <tr key={item.id}>
              <td>
                <label>
                  <input type="checkbox" className="checkbox" defaultChecked />
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
      </table>
    </div>
  );
};

export default OrderTable;
