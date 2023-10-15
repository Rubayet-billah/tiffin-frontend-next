"use client";
import CartTable from "@/components/ui/CartTable";
import OrderTable from "@/components/ui/OrderTable";
import { useState } from "react";

const OrderPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send the order to the backend)
    console.log("Order submitted:", formData);
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-4 w-full mx-auto">
      <h2 className="text-3xl font-semibold">My orders</h2>
      <OrderTable />
    </div>
  );
};

export default OrderPage;
