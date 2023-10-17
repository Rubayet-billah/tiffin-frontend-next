"use client";
import ItemCard from "../FoodItem/ItemCard";
import Link from "next/link";
import PageHeading from "../ui/PageHeading";
import { useGetFoodsQuery } from "@/redux/api/foodApi";
import Loading from "../ui/Loading";

const FeaturedContent = () => {
  const { data: foodItems, isLoading } = useGetFoodsQuery();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <PageHeading title="Hot Deals" subTitle="Checkout The Best Items" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Featured Content Items */}
          {[...foodItems]
            ?.filter((item) => item.isNew)
            .slice(0, 6)
            ?.map((item, idx) => (
              <ItemCard key={idx} item={item} />
            ))}
        </div>
        <Link href="/item" className="btn btn-warning my-6">
          View All Items
        </Link>
      </div>
    </section>
  );
};

export default FeaturedContent;
