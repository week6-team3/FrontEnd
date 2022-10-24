import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import _default from "react-redux/es/components/connect";

// 조회
export const __getCheckList = createAsyncThunk("comments/getCheckList",
  async (payload, thunkAPI) => { // 여기는 왜 코멘트데이터가 아니라 페이로드지?
    try {
      const { data } = await axios.get("http://localhost:3001/comments");
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
      }
    });

// 추가
export const __addCheckList = createAsyncThunk("comments/addCheckList", 
  async (commentData, thunkAPI) => {
    try {
      const { data } = await axios.post("http://localhost:3001/comments", commentData);
    return thunkAPI.fulfillWithValue(data);
    // 예외처리(에러잡는거)
  } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 삭제
export const __deleteCheckList = createAsyncThunk("comments/deleteCheckList",
  async (commentId, thunkAPI) => {
    try {
      await axios.delete(`http://localhost:3001/comments/${commentId}`);
      return thunkAPI.fulfillWithValue(commentId);
  } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 수정
export const __upDateCheckList = createAsyncThunk("comments/upDateCheckList",
  async (commentId, thunkAPI) => {
    console.log("수정", commentId)  
    try {
      const { data } = await axios.patch(`http://localhost:3001/comments/${commentId.id}`, commentId);
      return thunkAPI.fulfillWithValue(data);
  } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  comments: [],
  isLoding: false,
  error: null
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addCommets: (state, action) => {
      state.comments = action.payload;
    }
  },
  extraReducers: {
    // 댓글 조회하기
    [__getCheckList.pending]: (state) => {
      state.isLoding = true
    },
    [__getCheckList.fulfilled]: (state, action) => {
      state.isLoding = false
      state.comments = action.payload
    },
    [__getCheckList.rejected]: (state, action) => {
      state.isLoding = false
      state.error = action.payload
    },

    // 댓글 추가하기
    [__addCheckList.pending]: (state) => {
      state.isLoding = true
    },
    [__addCheckList.fulfilled]: (state, action) => {
      state.isLoding = false
      state.comments.push(action.payload)
    },
    [__addCheckList.rejected]: (state, action) => {
      state.isLoding = false
      state.error = action.payload
    },

    // 댓글 삭제하기
    [__deleteCheckList.pending]: (state) => {
      state.isLoding = true
    },
    [__deleteCheckList.fulfilled]: (state, action) => {
      state.isLoding = false
      const target = state.comments.findIndex(
        (comments) => comments.id === action.payload
      );
      state.comments.splice(target, 1)
    },
    [__deleteCheckList.rejected]: (state, action) => {
      state.isLoding = false
      state.error = action.payload
    },
    
    // 댓글 수정하기
    [__upDateCheckList.pending]: (state) => {
      state.isLoding = true
    },
    [__upDateCheckList.fulfilled]: (state, action) => {
      state.isLoding = false
      const target = state.comments.findIndex(
        (comment) => comment.id === action.payload.id
      );
      state.comments.splice(target, 1, action.payload)
    },
    [__upDateCheckList.rejected]: (state, action) => {
      state.isLoding = false;
      state.error = action.payload
    },
  }
});

export const { addCommets } = commentsSlice.actions;
export default commentsSlice.reducer;
