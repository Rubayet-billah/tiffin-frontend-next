// filterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchQuery: "",
  sortingOption: "",
  filteringOption: {
    category: "All",
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
      state.filteringOption.category = action.payload;
    },
    resetFilters: (state) => {
      state.searchQuery = "";
      state.sortingOption = "";
      state.filteringOption.category = "All";
    },
  },
});

export const {
  updateSearchQuery,
  updateSortingOption,
  updateFilteringOption,
  resetFilters, // New action
} = filterSlice.actions;

export default filterSlice.reducer;
