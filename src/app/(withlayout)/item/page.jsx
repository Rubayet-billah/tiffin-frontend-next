"use client";
import ItemCard from "@/components/FoodItem/ItemCard";
import { useSelector } from "react-redux";

const ItemsPage = () => {
  const { foodItems } = useSelector((state) => state.food);
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Food Items</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {foodItems?.map((item, idx) => (
          <ItemCard key={idx} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemsPage;
