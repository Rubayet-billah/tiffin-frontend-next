"use client";
import { useSelector } from "react-redux";
import ItemCard from "../FoodItem/ItemCard";
import Link from "next/link";

const FeaturedContent = () => {
  const { foodItems } = useSelector((state) => state.food);
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Featured Items</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Featured Content Items */}
          {foodItems
            ?.filter((item) => item.isNew)
            ?.map((item, idx) => (
              <ItemCard key={idx} item={item} />
            ))}
        </div>
        <Link href='/item' className="btn btn-warning my-6">View All Items</Link>
      </div>
    </section>
  );
};

export default FeaturedContent;
