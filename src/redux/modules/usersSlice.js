import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import Api from "../../shared/Api";
import instance from "../../shared/aips";
import { api } from "../../shared/aips";

// const urlLogin = {
//     login: process.env.
// }

const LOGIN = "user/LOGIN";
const LOGOUT = "user/LOGOUT";

export function UserLogIn(user) {
  console.log("UserLogIn");
  return { type: LOGIN, user };
}

export function UserLogOut(user) {
  console.log("LOGOUT");
  return { type: LOGOUT, user };
}

const initialState = {
  success: null,
};
// https://fe19-121-152-253-169.jp.ngrok.io/login
export const __loginDB = createAsyncThunk(
  "login/__loginDB",
  async (data, thunkAPI) => {
    try {
      const response = await Api.post("/login", data);
      console.log("ck", response);
      if (response.data.success === false) {
        window.alert(response.data.error.message);
        return thunkAPI.rejectWithValue();
      } else {
        localStorage.setItem("AccessToken", response.headers.AccessToken);
        localStorage.setItem("RefreshToken", response.headers.RefreshToken);
        localStorage.setItem("nickname", response.data.data.nickname);
        localStorage.setItem("isLogin", true);
        return thunkAPI.fulfillWithValue(response.data);
      }
    } catch (error) {
      window.alert(data.data.error.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __signUpDB = createAsyncThunk(
  "signup/__signUpDB",
  async (payload, thunkAPI) => {
    console.log("pay", payload);
    try {
      const response = await Api.post("/signup", payload);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [__loginDB.fulfilled]: (state, action) => {
      state.success = action.payload;
      state.isLogin = true;
    },
    [__loginDB.rejected]: (state, action) => {
      state.isLogin = false;
      state.error = action.payload;
    },
    [__signUpDB.fulfilled]: (state, action) => {
      state.success = action.payload;
      state.isLogin = true;
    },
    [__signUpDB.rejected]: (state, action) => {
      state.isLogin = false;
      state.error = action.payload;
    },
  },
});

export default usersSlice.reducer;
