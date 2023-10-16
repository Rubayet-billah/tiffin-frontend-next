"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetFoodsQuery } from "@/redux/api/foodApi";
import {
  updateSearchQuery,
  updateSortingOption,
  updateFilteringOption,
  resetFilters,
} from "@/redux/features/filterSlice";
import ItemCard from "@/components/FoodItem/ItemCard";
import PageHeading from "@/components/ui/PageHeading";
import { extractCategories } from "@/helpers/helpers";

const ItemsPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const { searchQuery, sortingOption, filteringOption } = useSelector(
    (state) => state.filter
  );
  const { data: foodItems, isLoading } = useGetFoodsQuery();
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(updateSearchQuery(searchValue));
  };

  const handleSortingChange = (event) => {
    dispatch(updateSortingOption(event.target.value));
  };

  const handleFilteringChange = (event) => {
    console.log(event.target.value);
    dispatch(updateFilteringOption(event.target.value));
  };

  const handleReset = () => {
    setSearchValue("");
    dispatch(resetFilters());
  };

  let content;

  if (
    foodItems?.length > 0 &&
    (searchQuery || sortingOption || filteringOption.category !== "All")
  ) {
    content = foodItems
      .filter((item) => {
        if (searchQuery) {
          const searchRegex = new RegExp(searchQuery, "i");
          return item.name.match(searchRegex);
        } else {
          return true;
        }
      })
      .sort((a, b) => {
        if (sortingOption === "priceLowToHigh") {
          return a.price - b.price;
        } else if (sortingOption === "priceHighToLow") {
          return b.price - a.price;
        } else {
          return 0;
        }
      })
      .filter((item) => {
        if (filteringOption.category !== "All") {
          return item.category === filteringOption.category;
        } else {
          return true;
        }
      })
      .map((item, idx) => <ItemCard key={idx} item={item} />);
  } else {
    content = foodItems?.map((item, idx) => <ItemCard key={idx} item={item} />);
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <PageHeading
        title="Food Items"
        subTitle="Explore Our Delicious Selection"
      />

      <section className="lg:flex lg:gap-x-6 items-center">
        <div className="bg-base-200 w-full max-w-lg my-5 p-4 rounded flex gap-3">
          <input
            className="input input-sm w-full rounded-sm"
            type="text"
            placeholder="Search your desired meal"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button onClick={handleSearch} className="btn btn-warning btn-sm">
            Search
          </button>
        </div>
        <div className="flex gap-4 my-4">
          <select
            className="select select-bordered"
            onChange={handleSortingChange}
          >
            <option value="">Sort By</option>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="priceHighToLow">Price: High to Low</option>
          </select>
          <select
            className="select select-bordered"
            onChange={handleFilteringChange}
          >
            <option value="All">Filter By</option>
            {extractCategories(foodItems)?.map((ct, idx) => (
              <option key={idx} value={ct}>
                {ct}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={() => handleReset()}
          className="btn btn-ghost btn-outline"
        >
          Reset
        </button>
      </section>

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
