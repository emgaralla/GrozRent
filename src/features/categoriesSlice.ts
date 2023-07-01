import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
};

export const fetchCategories = createAsyncThunk(
  "categories/fetch",
  async (_, thunkAPI: any) => {
    try {
      const res = await fetch("http://localhost:4000/category");
      const categories = await res.json();

      if (categories.error) {
        return thunkAPI.rejectWithValue(categories.error);
      }
      return categories;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export default categoriesSlice.reducer;
