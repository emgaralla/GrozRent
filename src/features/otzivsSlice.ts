import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  otzivs: [],
  adding: 'loading'
};

export const fetchOtzivs = createAsyncThunk(
  "otzivs/fetch",
  async (_, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4000/otzivs`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${thunkAPI.getState().application.token}`,
        },
      });
      const otzivs = await res.json();
      if (otzivs.error) {
        return thunkAPI.rejectWithValue(otzivs.error);
      }
      return otzivs;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);

export const postOtziv = createAsyncThunk(
  "otziv/post",
  async ({otziv} , thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/otzivs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${thunkAPI.getState().application.token}`,
        },
        body: JSON.stringify({text: otziv}),
      });
      const data = await res.json();
      if (data.error) {
        return thunkAPI.rejectWithValue(data.error);
      }
      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);

export const deleteOtziv = createAsyncThunk("delete/otziv", async (idd, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4000/otzivs/${idd}`, {
        
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${thunkAPI.getState().application.token}`,
        },
        body: JSON.stringify()
      });
      const otziv = await res.json();
      if (otziv.error) {
        return thunkAPI.rejectWithValue(otziv.error);
      }
      return otziv;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  });

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOtzivs.fulfilled, (state, action) => {
        state.otzivs = action.payload;
      })
      .addCase(postOtziv.fulfilled, (state, action) => {
        state.otzivs.push(action.payload);
        state.adding = 'success'
      })
      .addCase(postOtziv.pending, (state, action) => {
        state.adding = 'loading'
      })
      .addCase(deleteOtziv.fulfilled, (state, action) => {
        state.otzivs = state.otzivs.filter((item) => item._id !== action.meta.arg)
      })
  },
});

export default commentsSlice.reducer;