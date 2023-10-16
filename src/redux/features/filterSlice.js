// filterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchQuery: "", // Initial search query
  sortingOption: "", // Initial sorting option
  filteringOption: {
    // Define your filters here
    // Example filter:
    category: "All",
    // Add more filters as needed
    // Example filter:
    // dietaryPreference: "Any",
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    updateSearchQuery: (state, action) => {
      const searchString = action.payload;
      state.searchQuery = searchString.toLowerCase();
    },
    updateSortingOption: (state, action) => {
      state.sortingOption = action.payload;
    },
    updateFilteringOption: (state, action) => {
      // Example: Update the category filter
      state.filteringOption.category = action.payload;
    },
    // Add more filter-related actions here
    // Example:
    // updateDietaryPreferenceFilter: (state, action) => {
    //   state.filters.dietaryPreference = action.payload;
    // },
  },
});

export const { updateSearchQuery, updateSortingOption, updateFilteringOption } =
  filterSlice.actions;

export default filterSlice.reducer;
