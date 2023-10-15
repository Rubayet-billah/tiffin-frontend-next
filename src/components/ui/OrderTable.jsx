import React from "react";
import Image from "next/image";
import { AiOutlineDelete } from "react-icons/ai";
import { useSelector } from "react-redux";
import { getMyOrders } from "@/helpers/helpers";

const OrderTable = () => {
  const { user } = useSelector((state) => state.auth);
  const { orders } = useSelector((state) => state.order);
  const myOrders = getMyOrders(orders, user);
  if (myOrders?.orderItems?.length < 1) {
    return (
      <div className="text-center text-xl">Sorry, no items ordered yet.</div>
    );
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>COD</th>
            <th>Delivery Time</th>
          </tr>
        </thead>
        <tbody>
          {myOrders?.orderItems?.map((item) => (
            <tr key={item.id}>
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
              <td>{user?.email} </td>
              <td>{myOrders?.userInfo.location}</td>
              <td>${(item.price * +item.quantityInCart).toFixed(2)}</td>
              <td>30 min</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
