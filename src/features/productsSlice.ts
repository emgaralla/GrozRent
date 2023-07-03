import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async (_, thunkAPI: any) => {
    try {
      const res = await fetch("http://localhost:4000/products");
      const data = await res.json();

      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);

export const createProduct = createAsyncThunk(
  "products/create",
  async ({ title, text, adress, phone, price, image, categorie }, thunkAPI) => {
    console.log(image);
    try {
      const formData = new FormData();
      formData.append("img", image[0]);
      formData.append("img", image[1]);
      formData.append("img", image[2]);
      formData.append("title", title);
      formData.append("text", text);
      formData.append("adress", adress);
      formData.append("phone", phone);
      formData.append("price", price);
      formData.append("categorie", categorie);

      const res = await fetch("http://localhost:4000/products", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().application.token}`,
        },
      });

      const data = await res.json();
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, aciton) => {
        state.products = aciton.payload;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      });
  },
});

export default productsSlice.reducer;
