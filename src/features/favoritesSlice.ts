import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
}

export const getFavoritesUser = createAsyncThunk(
  "get/favorites",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4000/favorites/${id}`)
      const userFavorites = await res.json()
      // console.log(userFavorites.favoriteProducts)
      return userFavorites.favoriteProducts
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
)

export const addFavorite = createAsyncThunk(
  "add/favorite",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4000/favorites`, {
        method: 'PATCH',
        headers: {
          'Content-Type':'application/json',
          Authorization: `Bearer ${thunkAPI.getState().application.token}`
        },
        body: JSON.stringify({id})
      })
      const updated = await res.json()
      // console.log(updated);
      return updated
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
)

export const createBasket = createAsyncThunk(
  "post/faroites",
  async (data, thunkAPI) => {
    try {
      const createFavoriteBasket = await fetch('http://localhost:4000/favorites', {
        method: 'POST',
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${thunkAPI.getState().application.token}`,
        }
      })
      const favoritesBasket = await createFavoriteBasket.json()
      // console.log(favoritesBasket)
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
)


const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    /////////// getFavoritesUser /////////////
    .addCase(getFavoritesUser.fulfilled, (state, action) => {
      state.favorites = action.payload
    })
    /////////// addFavorite /////////////
    .addCase(addFavorite.fulfilled, (state, action) => {
      state.favorites.push(action.payload)
    })
  },
});


export default favoritesSlice.reducer;
