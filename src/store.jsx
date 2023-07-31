import { configureStore } from "@reduxjs/toolkit";
import actionsReducer from "./store/actionSlice";
import { apiSlice } from "./store/apiSlice";
import authReducer from "./store/authSlice";
import userReducer from "./store/userSlice";

export default configureStore({
  reducer: {
    actions: actionsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    user: userReducer

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiSlice.middleware),
});
