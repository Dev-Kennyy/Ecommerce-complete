// src/redux/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Read from localStorage (or fallback to empty array)
const storedCartItems = localStorage.getItem("cartItems");
const initialState = {
  cartItems: storedCartItems ? JSON.parse(storedCartItems) : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload,
      );
    },

    increaseQuantity: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item) item.quantity += 1;
    },

    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },

    clearCart(state) {
      state.cartItems = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
