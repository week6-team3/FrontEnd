import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
};
/**체크리스트 추가Thunk */
// export const __addCheck = createAsyncThunk(
//   "posts/addCheck",
//   async (checkData, thunkAPI) => {
//     console.log("checkAPI", checkData)
//     try {
//       const { data } = await axios.patch(
//         `http://localhost:3001/posts/${checkData.id}`,
//         checkData.data
//       );
//       return thunkAPI.fulfillWithValue(data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

/** 게시글 추가 Thunk */
export const __addPosts = createAsyncThunk(
  "posts/addPosts",
  async (postData, thunkAPI) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3001/posts/",
        postData
      );
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
      const { data } = await axios.get("http://localhost:3001/posts");
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
    try {
      const { data } = await axios.put(
        `http://localhost:3001/posts/${postId.id}`,
        postId
      );
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
      await axios.delete(`http://localhost:3001/posts/${postId}`);
      return thunkAPI.fulfillWithValue(postId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

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
    /**체크리스트 추가 */
    // [__addCheck.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   const target = state.posts.findIndex(
    //     (post) => post.id === action.payload.id
    //   );
    //   state.posts[target] = action.payload;
    // },
  },
});

export const {} = postsSlice.actions;
export default postsSlice.reducer;