import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartHandeler",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (itemInCart) {
        console.log("added to cart before");
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const products = state.cart.filter(
        (product) => product.id !== action.payload.id
      );
      state.cart = products;
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const itemInCart = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (itemInCart.quantity === 1) {
        const products = state.cart.filter(
          (product) => product.id !== itemInCart.id
        );
        state.cart = products;
      } else {
        itemInCart.quantity -= 1;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
