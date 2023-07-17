import { createSlice } from "@reduxjs/toolkit";
import IProduct from "../classes/IProduct";

const categoryId = 0;
const productObject = null;

export const actionSlice = createSlice({
  name: "actions",
  initialState: {
    category: categoryId,
    product: productObject,
  },
  reducers: {
    setCategory: (state, action) => {
      const id = action.payload;
      state.category = id;
    },
    setProduct: (state, action) => {
      const {
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
      } = action.payload;
      state.product = new IProduct(
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
      );
    },
  },
});

export default actionSlice.reducer;
export const { setCategory, setProduct } = actionSlice.actions;
