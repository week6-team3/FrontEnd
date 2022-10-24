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
    /**Share 요청하기 */
    [__sharePost.fulfilled]: (state, action) => {
      state.sharings.push(action.payload);
    },
  },
});

export const {} = sharingsSlice.actions;
export default sharingsSlice.reducer;
