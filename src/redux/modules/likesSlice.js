import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// 수정 (요청)
export const __upDateLikes = createAsyncThunk("likes/upDateLikes",
  async (likesId, thunkAPI) => {
    console.log("수정", likesId)  
    try {
      const { data } = await axios.patch(`http://localhost:3001/likes/${likesId.id}`, likesId);
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
      setLikes: (state, action) => {
        state.likes = action.payload;
      }
    },
    extraReducers: {
    // 좋아요 수정하기
    [__upDateLikes.pending]: (state) => {
      state.isLoding = true
    },
    [__upDateLikes.fulfilled]: (state, action) => {
      state.isLoding = false
      const target = state.comments.findIndex(
        (comment) => comment.id === action.payload.id
      );
      state.comments.splice(target, 1, action.payload)
    },
    [__upDateLikes.rejected]: (state, action) => {
      state.isLoding = false;
      state.error = action.payload
    },
  }
});
  export const { setLikes } = likesSlice.actions;
  export default likesSlice.reducer;