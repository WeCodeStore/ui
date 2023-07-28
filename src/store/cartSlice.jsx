import { createSlice } from "@reduxjs/toolkit";
import IProduct from "../classes/IProduct";

const quantityList = [];
const cartList = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    quantity: quantityList,
    list: cartList,
  },
  reducers: {
    addItemToCart: (state, action) => {
      const [
        {
          productId,
          name,
          price,
          quantity,
          sku,
          faceImage,
          images,
          description,
          category,
          avgReviewRate,
          totalReviews,
        },
        cartQ,
      ] = action.payload;
      const tempList = state.list;
      const tempObj = tempList.find((item) => item.productId === productId);
      const tempObjIndex = tempList.findIndex((item) => item.productId === productId);
      if (!tempObj) {
        state.quantity.push(cartQ);
        state.list.push(
          new IProduct(
            productId,
            name,
            price,
            quantity,
            sku,
            faceImage,
            images,
            description,
            category,
            avgReviewRate,
            totalReviews
          )
        );
      } else {
        let temp = state.quantity[tempObjIndex];
        temp += cartQ;
        return {
          ...state,
          quantity: [
            ...state.quantity.slice(0, tempObjIndex),
            temp,
            ...state.quantity.slice(tempObjIndex + 1),
          ],
        };
      }
    },
    increaseQuantity: (state, action) => {
      const itemIndex = action.payload;
      let temp = state.quantity[itemIndex];
      temp++;
      return {
        ...state,
        quantity: [
          ...state.quantity.slice(0, itemIndex),
          temp,
          ...state.quantity.slice(itemIndex + 1),
        ],
      };
    },
    decreaseQuantity: (state, action) => {
      const itemIndex = action.payload;
      let temp = state.quantity[itemIndex];
      temp--;
      return {
        ...state,
        quantity: [
          ...state.quantity.slice(0, itemIndex),
          temp,
          ...state.quantity.slice(itemIndex + 1),
        ],
      };
    },
    removeItemFromCart: (state, action) => {
        const itemIndex = action.payload;
        console.log("INDEX: ", itemIndex);
        state.list.splice(itemIndex, 1);
        state.quantity.splice(itemIndex, 1);
    }
  },
});

export default cartSlice.reducer;
export const { addItemToCart, increaseQuantity, decreaseQuantity, removeItemFromCart } =
  cartSlice.actions;
