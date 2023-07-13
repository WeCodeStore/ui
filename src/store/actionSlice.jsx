import { createSlice } from "@reduxjs/toolkit";

const categoryId=0;

export const actionSlice = createSlice({
  name: "actions",
  initialState: {
    category: categoryId
  },
  reducers: {
    setCategory: (state, action) => {
      const id = action.payload;
      state.category=id;
    },
  },
});

export default actionSlice.reducer;
export const { setCategory } = actionSlice.actions;