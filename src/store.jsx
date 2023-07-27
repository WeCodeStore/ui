import { configureStore } from "@reduxjs/toolkit";
import actionsReducer from "./store/actionSlice";
import cartReducer from "./store/cartSlice";
import { apiSlice } from "./store/apiSlice";

export default configureStore({
  reducer: {
    actions: actionsReducer,
    cart: cartReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiSlice.middleware),
});
