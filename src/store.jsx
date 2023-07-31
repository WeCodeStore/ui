import { configureStore } from "@reduxjs/toolkit";
import actionsReducer from "./store/actionSlice";
import authReducer from "./store/authSlice";
import userReducer from "./store/userSlice";
import cartReducer from "./store/cartSlice";
import { apiSlice } from "./store/apiSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import {
  persistReducer,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  actions: actionsReducer,
  cart: cartReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authReducer,
  user: userReducer
});

const persistedReducers = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiSlice.middleware),
});
