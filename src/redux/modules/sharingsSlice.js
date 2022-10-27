import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Api from "../../shared/Api";


const initialState = {
  sharings: [],
};


export const __getSharePost = createAsyncThunk(
  "sharings/getSharePost",
  async (payload, thunkAPI) => {
    console.log("payload", payload)
    try {
      const { data } = await Api.get(
        "/sharings"
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
    try {
      const { data } = await Api.post("/sharings", sharePostData);
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
      const { data } = await Api.get("/sharings");
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
    /**share 조회하기 **/
    [__getSharePost.fulfilled]: (state, action) => {
      state.isLoading = true;
      state.sharings = action.payload
    },

    /**Share 요청하기 **/
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
