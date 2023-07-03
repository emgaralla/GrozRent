import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

export const fetchUser = createAsyncThunk(
  "user/fetch",
  async (_, thunkAPI: any) => {
    try {
      const res = await fetch("http://localhost:4000/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${thunkAPI.getState().application.token}`,
        },
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

export const handleChangeUser = createAsyncThunk(
  "user-change/fetch",
  async (
    { nameValue, lastNameValue, emailValue, phoneValue },
    thunkAPI: any
  ) => {
    try {
      const res = await fetch("http://localhost:4000/user", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${thunkAPI.getState().application.token}`,
        },
        body: JSON.stringify({
          name: nameValue,
          lastName: lastNameValue,
          email: emailValue,
          phone: phoneValue,
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

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload;
    }),
      builder.addCase(handleChangeUser.fulfilled, (state, action) => {
        state.user.name = action.meta.arg.nameValue;
        state.user.lastName = action.meta.arg.lastNameValue;
        state.user.phone = action.meta.arg.phoneValue;
        state.user.email = action.meta.arg.emailValue;
        state.loading = false;
      });
  },
});

export default userSlice.reducer;
