import { createSlice } from "@reduxjs/toolkit";

const cartList = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    list: cartList,
  },
  reducers: {
    addItemToCart: (state, action) => {
      const product = action.payload;
      state.list.push(product);
    },
  },
});

export default cartSlice.reducer;
export const { addItemToCart} = cartSlice.actions;