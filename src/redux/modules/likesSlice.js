import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// 수정 (요청)
export const __likes = createAsyncThunk("likes/likes",
  async (likesId, thunkAPI) => {
    try {
      const { data } = await axios.put(`http://localhost:3001/likes/${likesId.id}`, likesId);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  likes: [],
  isLoding: false,
  error: null
};

const likesSlice = createSlice({
    name: "likes",
    initialState,
    reducers: {
      // like: (state, action) => {
      //   state.likes = state.likes + action.payload;
      // },
      // unlike: (state, action) => {
      //   state.likes = state.likes - action.payload;
      // }
    },

    extraReducers: {
    // 좋아요 수정하기
    [__likes.pending]: (state) => {
      state.isLoding = true
    },
    [__likes.fulfilled]: (state, action) => {
      state.isLoding = false
      // const target = state.likes.findIndex(
      //   (like) => like.id === action.payload.id);
      // state.likes.splice(target, 1, action.payload)
    },
    [__likes.rejected]: (state, action) => {
      state.isLoding = false;
      state.error = action.payload
    },
  }
});
  export const { like, unlike } = likesSlice.actions;
  export default likesSlice.reducer;