// filterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchQuery: "", // Initial search query
  filters: {
    // Define your filters here
    // Example filter:
    // category: "All",
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
    // Add more filter-related actions here
  },
});

export const { updateSearchQuery } = filterSlice.actions;

export default filterSlice.reducer;
