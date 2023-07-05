import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  comments: [],
  adding: 'loading'
};

export const fetchComments = createAsyncThunk(
  "comments/fetch",
  async (_, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4000/comments`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${thunkAPI.getState().application.token}`,
        },
      });
      const comments = await res.json();
      if (comments.error) {
        return thunkAPI.rejectWithValue(comments.error);
      }
      return comments;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);

export const postComment = createAsyncThunk(
  "comment/post",
  async ({id, comment} , thunkAPI) => {
    console.log(id, comment);
    try {
      const res = await fetch(`http://localhost:4000/comments/${id.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${thunkAPI.getState().application.token}`,
        },
        body: JSON.stringify({text: comment}),
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

export const deleteComment = createAsyncThunk("delete/comment", async (idd, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4000/comments/${idd}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${thunkAPI.getState().application.token}`,
        },
        body: JSON.stringify()
      });
      const comment = await res.json();
      if (comment.error) {
        return thunkAPI.rejectWithValue(comment.error);
      }
      return comment;
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
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.comments.push(action.payload);
        state.adding = 'success'
      })
      .addCase(postComment.pending, (state, action) => {
        state.adding = 'loading'
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        state.comments = state.comments.filter((item) => item._id !== action.meta.arg)
      })
  },
});

export default commentsSlice.reducer;