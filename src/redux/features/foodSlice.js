// foodSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { foodItems } from "../../constants/constants";

const initialState = {
  foodItems: foodItems,
  loading: false,
  error: null,
};

const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    setFoodItems(state, action) {
      state.foodItems = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setFoodItems, setLoading, setError } = foodSlice.actions;

export default foodSlice.reducer;
