// authSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser, logoutUser } from "../thunkApi/thunkApi";
import { getFromLocalStorage, setToLocalStorage } from "@/helpers/helpers";
import { authKey } from "@/constants/constants";

const initialState = {
  user: getFromLocalStorage(authKey),
  error: null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
      setToLocalStorage(authKey, state.user);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = null;
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.user = null;
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = null;
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.user = null;
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(logoutUser.pending, () => {
        // Handle logout loading if needed
      })
      .addCase(logoutUser.fulfilled, (state) => {
        // Clear user data and handle logout success
        state.user = null;
        state.error = null;
        state.loading = false;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        // Handle logout failure, if necessary
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { updateUser } = authSlice.actions;

export default authSlice.reducer;
