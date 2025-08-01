import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("cartItems", JSON.stringify(state.cart.cartItems));
});
// src/redux/cartSelectors.js
export const selectCartTotal = (state) => {
  return state.cart.cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
};
