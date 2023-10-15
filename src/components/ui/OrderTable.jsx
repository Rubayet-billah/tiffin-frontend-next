"use client";
import { getMyOrders } from "@/helpers/helpers";
import Image from "next/image";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useSelector } from "react-redux";

const OrderTable = () => {
  const { user } = useSelector((state) => state.auth);
  const { orders } = useSelector((state) => state.order);
  const myOrders = getMyOrders(orders, user);
  // const myOrders = [
  //   {
  //     id: 2,
  //     name: "Sushi Platter",
  //     description: "Assorted sushi rolls with soy sauce and wasabi.",
  //     image:
  //       "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3VzaGl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  //     category: "Sushi",
  //     price: 18.99,
  //     isNew: true,
  //     location: "Dhaka,bangladesh",
  //     contactInfo: "+8801875685814",
  //     available: true,
  //     quantityInCart: 1,
  //     isCheckedForOrder: true,
  //   },
  // ];
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>COD</th>
            <th>Devery Time</th>
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
              <td>${item.price.toFixed(2) * +item.quantityInCart}</td>
              <td>30 min</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
