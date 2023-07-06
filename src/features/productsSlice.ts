import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type createImg = {
  title: string;
  text: string;
  address: string;
  phone: string;
  price: string;
  image: any;
  categorie: string;
};

const initialState = {
  products: [],
  oneProduct: {},
  userProducts: [],
  user: {},
  loading: true,
  upload: false,
};

export const oneProductsFind = createAsyncThunk(
  "one/product",
  async ({ id }, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4000/products/${id}`);
      const data = await res.json();
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

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

export const fetchUserProducts = createAsyncThunk(
  "user-products/fetch",
  async (_, thunkAPI: any) => {
    try {
      const res = await fetch("http://localhost:4000/user-products", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${thunkAPI.getState().application.token}`,
        },
      });
      const data = await res.json();
      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);

export const handleChangeAd = createAsyncThunk(
  "user-product-change/fetch",
  async (
    { id, titleValue, phoneValue, textValue, priceValue, addressValue },
    thunkAPI: any
  ) => {
    try {
      const res = await fetch(`http://localhost:4000/user-product/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${thunkAPI.getState().application.token}`,
        },
        body: JSON.stringify({
          title: titleValue,
          phone: phoneValue,
          text: textValue,
          price: priceValue,
          adress: addressValue,
        }),
      });
      const user = await res.json();

      if (user.error) {
        return thunkAPI.rejectWithValue(user.error);
      }
      return user;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);

export const fetchDeleteImage = createAsyncThunk(
  "delete-image/fetch",
  async ({ id, filename }, thunkAPI: any) => {
    try {
      const res = await fetch(
        `http://localhost:4000/user-product-image/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${thunkAPI.getState().application.token}`,
          },
          body: JSON.stringify({
            filename,
          }),
        }
      );
      const data = await res.json();
      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);

export const fetchDeleteProduct = createAsyncThunk(
  "delete-product/fetch",
  async (id, thunkAPI: any) => {
    try {
      const res = await fetch(`http://localhost:4000/user-product/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${thunkAPI.getState().application.token}`,
        },
      });
      const data = await res.json();
      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);

export const handleChangeImageProduct = createAsyncThunk(
  "user-product/patch",
  async ({ id, image }, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append("img", image[0]);
      formData.append("img", image[1]);
      formData.append("img", image[2]);
      formData.append("img", image[3]);
      formData.append("img", image[4]);

      const res = await fetch(
        `http://localhost:4000/user-product-add-image/${id}`,
        {
          method: "PATCH",
          body: formData,
          headers: {
            Authorization: `Bearer ${thunkAPI.getState().application.token}`,
          },
        }
      );

      const data = await res.json();
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createProduct = createAsyncThunk<ReturnType<any>, createImg>(
  "products/create",
  async ({ title, text, address, phone, price, image, categorie }, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append("img", image[0]);
      formData.append("img", image[1]);
      formData.append("img", image[2]);
      formData.append("img", image[3]);
      formData.append("img", image[4]);
      formData.append("title", title);
      formData.append("text", text);
      formData.append("adress", address);
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
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(oneProductsFind.fulfilled, (state, action) => {
        state.oneProduct = action.payload;
        state.user = action.payload.user;
        state.loading = false;
      })
      .addCase(oneProductsFind.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchUserProducts.fulfilled, (state, action) => {
        state.userProducts = action.payload;
      })
      .addCase(fetchDeleteImage.fulfilled, (state, action) => {
        state.oneProduct.image = state.oneProduct.image.filter(
          (item) => item.filename !== action.meta.arg.filename
        );
      })
      .addCase(handleChangeAd.fulfilled, (state, action) => {
        state.oneProduct.title = action.meta.arg.titleValue;
        state.oneProduct.phone = action.meta.arg.phoneValue;
        state.oneProduct.text = action.meta.arg.textValue;
        state.oneProduct.price = action.meta.arg.priceValue;
        state.oneProduct.adress = action.meta.arg.addressValue;
        state.loading = false;
      })
      .addCase(handleChangeImageProduct.pending, (state) => {
        state.upload = true;
      })
      .addCase(handleChangeImageProduct.fulfilled, (state) => {
        state.upload = false;
      })
      .addCase(fetchDeleteProduct.fulfilled, (state, action) => {
        state.userProducts = state.userProducts.filter(
          (item) => item._id !== action.meta.arg
        );
      });
  },
});

export default productsSlice.reducer;
