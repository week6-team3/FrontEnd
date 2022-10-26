import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  sharings: [],
};

export const __sharePost = createAsyncThunk(
  "sharings/sharePost",
  async (sharePostData, thunkAPI) => {
    console.log("share2", sharePostData);
    try {
      const { data } = await axios.post(
        "http://localhost:3001/sharings",
        sharePostData
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

/** Share 조회 Thunk */
export const __shareGet = createAsyncThunk(
  "posts/shareGet",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get("http://43.200.183.30:3000/sharings");
      console.log(typeof data.travel);
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
    /**Share 요청하기 */
    [__sharePost.fulfilled]: (state, action) => {
      state.sharings.push(action.payload);
    },

    /**Share 조회하기 */
    [__shareGet.pending]: (state) => {
      state.isLoading = true;
    },
    [__shareGet.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [__shareGet.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default sharingsSlice.reducer;
