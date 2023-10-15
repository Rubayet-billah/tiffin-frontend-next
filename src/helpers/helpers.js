// helpers.js

const isLocalStorageAvailable = () => {
  return typeof window !== "undefined" && window.localStorage;
};

export const setToLocalStorage = (key, value) => {
  if (isLocalStorageAvailable()) {
    if (typeof value !== "string") {
      value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
  }
};

export const getFromLocalStorage = (key) => {
  if (isLocalStorageAvailable()) {
    const item = localStorage.getItem(key);
    if (item) {
      return JSON.parse(item);
    }
  }
  return null;
};

export const removeFromLocalStorage = (key) => {
  if (isLocalStorageAvailable()) {
    localStorage.removeItem(key);
  }
};

// Function to format currency (e.g., $12.99)
export const formatCurrency = (amount) => {
  return `$${parseFloat(amount).toFixed(2)}`;
};

// Function to calculate the total price of items in a cart
export const calculateTotalPrice = (cart) => {
  return cart.reduce((total, item) => total + item.price, 0);
};

// Function to capitalize the first letter of a string
export const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// Function to format a date (e.g., "2023-10-11" to "October 11, 2023")
export const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};
