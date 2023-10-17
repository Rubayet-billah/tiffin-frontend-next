"use client";
import React, { useEffect, useState } from "react";
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
import Loading from "@/components/ui/Loading";

const ItemsPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const { searchQuery, sortingOption, filteringOption } = useSelector(
    (state) => state.filter
  );
  const { data: foodItems, isLoading } = useGetFoodsQuery();
  const dispatch = useDispatch();

  //pagination states
  const [page, setPage] = useState(1);
  const [limit, setlimit] = useState(5);
  const [arrLength, setArrLength] = useState(foodItems?.length);
  const skip = page * limit - limit;
  const totalPageNo = Math.ceil(arrLength / limit);

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

  // let content;

  let filteredFoodItems;

  if (
    foodItems?.length > 0 &&
    (searchQuery || sortingOption || filteringOption.category !== "All")
  ) {
    filteredFoodItems = foodItems
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
      });
  } else {
    filteredFoodItems = foodItems;
  }

  const content = filteredFoodItems
    ?.slice(skip, skip + limit)
    .map((item, idx) => <ItemCard key={idx} item={item} />);

  useEffect(() => {
    setArrLength(filteredFoodItems?.length);
  }, [filteredFoodItems]);

  if (isLoading) {
    return <Loading />;
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
            placeholder="Search your desired meal i.e Burger, Pizza"
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
        {isLoading ? <Loading /> : content ? content : <p>No results found.</p>}
      </div>
      <section className="flex mt-5 justify-center gap-3">
        <div className="join rounded-none">
          {Array.from({ length: totalPageNo }, (_, i) => i + 1).map((key) => (
            <button
              key={key}
              onClick={() => setPage(key)}
              className={`join-item btn ${
                page == key && "btn-active"
              } mx-1 rounded`}
            >
              {key}
            </button>
          ))}
        </div>
        <div className="bg-base-200 rounded flex gap-3">
          <select
            className="select"
            onChange={(e) => setlimit(+e.target.value)}
          >
            <option value={limit}>Per Page</option>
            {[2, 5, 10].map((ct, idx) => (
              <option key={idx} value={ct}>
                {ct}
              </option>
            ))}
          </select>
        </div>
      </section>
    </div>
  );
};

export default ItemsPage;
