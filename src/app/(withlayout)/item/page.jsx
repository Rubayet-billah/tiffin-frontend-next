"use client";
import ItemCard from "@/components/FoodItem/ItemCard";
import PageHeading from "@/components/ui/PageHeading";
import { useGetFoodsQuery } from "@/redux/api/foodApi";
import { updateSearchQuery } from "@/redux/features/filterSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ItemsPage = () => {
  const [value, setValue] = useState("");
  const { searchQuery } = useSelector((state) => state.filter);
  const { data: foodItems, isLoading } = useGetFoodsQuery();
  const dispatch = useDispatch();

  const handleSearch = () => {
    console.log(value);
    dispatch(updateSearchQuery(value));
  };

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  let content;
  if (searchQuery && foodItems) {
    // Filter foodItems based on the search query
    const filteredFoodItems = foodItems.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (filteredFoodItems.length > 0) {
      content = filteredFoodItems.map((item, idx) => (
        <ItemCard key={idx} item={item} />
      ));
    } else {
      content = <p>No results found.</p>;
    }
  } else if (foodItems) {
    content = foodItems.map((item, idx) => <ItemCard key={idx} item={item} />);
  }
  return (
    <div className="container mx-auto p-4">
      <PageHeading
        title="Food Items"
        subTitle="Explore Our Delicious Selection"
      />
      <div className="bg-base-200 w-full max-w-lg my-5 p-4 rounded flex gap-3">
        <input
          className="input input-sm w-full rounded-sm"
          type="text"
          placeholder="Search your desired meal"
          defaultValue={searchQuery}
          onChange={handleInputChange}
        />
        <button
          onClick={() => handleSearch()}
          className="btn btn-warning btn-sm"
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {isLoading ? (
          <p>Loading...</p>
        ) : content ? (
          content
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default ItemsPage;
