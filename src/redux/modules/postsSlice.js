import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Api from "../../shared/Api";

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
};

/** 게시글 추가 Thunk */
export const __addPosts = createAsyncThunk(
  "posts/addPosts",
  async (postData, thunkAPI) => {
    try {
      const { data } = await Api.post("/posts", postData);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

/** 게시글 조회 Thunk */
export const __getPosts = createAsyncThunk(
  "posts/getPosts",
  async (payload, thunkAPI) => {
    try {
      const { data } = await Api.get("/posts");
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

/**게시글 수정 Thunk */
export const __editPosts = createAsyncThunk(
  "posts/editPosts",
  async (postId, thunkAPI) => {
    console.log("id", postId);
    try {
      const { data } = await Api.patch("/posts", postId);
      console.log("data", data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

/**게시글 삭제 Thunk */
export const __deletePosts = createAsyncThunk(
  "posts/deletePosts",
  async (postId, thunkAPI) => {
    try {
      await Api.delete(`/posts/${postId}`);
      return thunkAPI.fulfillWithValue(postId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// /** 게시글 상세보기 조회 Thunl */
// export const __detailPosts = createAsyncThunk(
//   "posts/detailPosts",
//   async (postId, thunkAPI) => {
//     console.log("detail", postId);
//     try {
//       await Api.get(`/posts/${postId}`);
//       return thunkAPI.fulfillWithValue(postId);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    /**POST 추가하기 */
    [__addPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [__addPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts.push(action.payload);
    },
    [__addPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    /**POST 조회하기 */
    [__getPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [__getPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [__getPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    /**POST 수정하기 */
    [__editPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [__editPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      const target = state.posts.findIndex(
        (post) => post.id === action.payload.id
      );
      state.posts.splice(target, 1, action.payload);
    },
    [__editPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    /**POST 삭제하기 */
    [__deletePosts.pending]: (state) => {
      state.isLoading = true;
    },
    [__deletePosts.fulfilled]: (state, action) => {
      const target = state.posts.findIndex(
        (post) => post.id === action.payload
      );
      state.posts.splice(target, 1);
    },
    [__deletePosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    // /**게시글 상세 조회 */
    // [__detailPosts.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [__detailPosts.fulfilled]: (state, action) => {
    //   console.log("action", action);
    //   state.isLoading = false;
    //   state.posts = action.payload;
    // },
    // [__detailPosts.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  },
});

export const {} = postsSlice.actions;
export default postsSlice.reducer;
