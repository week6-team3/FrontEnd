import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  sharings: [],
};


export const __getSharePost = createAsyncThunk(
  "sharings/getSharePost",
  async (payload, thunkAPI) => {
    console.log("payload", payload)
    try {
      const { data } = await axios.get(
        "http://localhost:3001/sharings"
        );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __sharePost = createAsyncThunk(
  "sharings/sharePost",
  async (sharePostData, thunkAPI) => {
    console.log("share2", sharePostData);
    try {
      const { data } = await axios.post(
        "http://localhost:3001/sharings/",
        sharePostData
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const sharingsSlice = createSlice({
  name: "sharings",
  initialState,
  reducers: {},
  extraReducers: {
    /**share 조회하기 **/
    [__getSharePost.fulfilled]: (state, action) => {
      state.isLoading = true;
      state.sharings = action.payload
    },

    /**Share 요청하기 **/
    [__sharePost.fulfilled]: (state, action) => {
      state.sharings.push(action.payload);
    },
  },
});

export const {} = sharingsSlice.actions;
export default sharingsSlice.reducer;
