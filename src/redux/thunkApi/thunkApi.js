// thunkApi.js

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { authKey, userRole } from "../../constants/constants";
import app from "@/firebase/firebase.config";
import { removeFromLocalStorage, setToLocalStorage } from "@/helpers/helpers";

const auth = getAuth(app);

// Create an async thunk for user registration
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ email, password }, thunkAPI) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      let user = {};
      user.uid = userCredential.user.uid;
      user.name = userCredential.user.displayName;
      user.email = userCredential.user.email;
      user.image = userCredential.user.photoURL;
      userCredential.user.email === "admin@gmail.com"
        ? (user.role = userRole.admin)
        : (user.role = userRole.customer);
      setToLocalStorage(authKey, user);
      return user;
    } catch (error) {
      // Handle registration failure
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Create an async thunk for user login
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, thunkAPI) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      let user = {};
      user.uid = userCredential.user.uid;
      user.name = userCredential.user.displayName;
      user.email = userCredential.user.email;
      user.image = userCredential.user.photoURL;

      userCredential.user.email === "admin@gmail.com"
        ? (user.role = userRole.admin)
        : (user.role = userRole.customer);
      setToLocalStorage(authKey, user);
      return user;
    } catch (error) {
      // Handle login failure
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Create an async thunk for user logout
export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, thunkAPI) => {
    try {
      // Sign out the user
      await signOut(auth);

      // Remove user data from local storage
      removeFromLocalStorage(authKey);

      return null; // Return null or any other relevant data to indicate successful logout
    } catch (error) {
      // Handle logout failure
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
