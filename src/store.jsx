import { configureStore } from "@reduxjs/toolkit";
import actionsReducer from "./store/actionSlice";
import { apiSlice } from "./store/apiSlice";

export default configureStore({
  reducer: {
    actions: actionsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiSlice.middleware),
});
