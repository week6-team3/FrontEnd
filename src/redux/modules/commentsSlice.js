import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import _default from "react-redux/es/components/connect";
import Api from "../../shared/Api";

// 조회
export const __getComments = createAsyncThunk("comments/getCheckList",
  async (payload, thunkAPI) => {
    try {
      const { data } = await Api.get("/comments");
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
      }
    });

// 추가
export const __addComments = createAsyncThunk("comments/addCheckList", 
  async (commentData, thunkAPI) => {
    console.log("추가",commentData)
    try {
      const { data } = await Api.post("/comments", commentData); //바디로 보낸거
    return thunkAPI.fulfillWithValue(data);
    // 예외처리(에러잡는거)
  } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 삭제
export const __deleteComments = createAsyncThunk("comments/deleteCheckList",
  async (commentId, thunkAPI) => {
    console.log("삭제", commentId)
    try {
      await Api.delete(`/comments/${commentId}`); //파람으로 보낸거
      
      return thunkAPI.fulfillWithValue(commentId);
  } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 수정
export const __upDateComments = createAsyncThunk("comments/upDateCheckList",
  async (commentId, thunkAPI) => {
    console.log("수정", commentId)  
    try {
      const { data } = await Api.patch(`/comments/${commentId.id}`, commentId);
      
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
    [__getComments.pending]: (state) => {
      state.isLoding = true
    },
    [__getComments.fulfilled]: (state, action) => {
      state.isLoding = false
      state.comments = action.payload
    },
    [__getComments.rejected]: (state, action) => {
      state.isLoding = false
      state.error = action.payload
    },

    // 댓글 추가하기
    [__addComments.pending]: (state) => {
      state.isLoding = true
    },
    [__addComments.fulfilled]: (state, action) => {
      state.isLoding = false
      state.comments.push(action.payload)
    },
    [__addComments.rejected]: (state, action) => {
      state.isLoding = false
      state.error = action.payload
    },

    // 댓글 삭제하기
    [__deleteComments.pending]: (state) => {
      state.isLoding = true
    },
    [__deleteComments.fulfilled]: (state, action) => {
      state.isLoding = false
      const target = state.comments.findIndex(
        (comments) => comments.id === action.payload
      );
      state.comments.splice(target, 1)
    },
    [__deleteComments.rejected]: (state, action) => {
      state.isLoding = false
      state.error = action.payload
    },
    
    // 댓글 수정하기
    [__upDateComments.pending]: (state) => {
      state.isLoding = true
    },
    [__upDateComments.fulfilled]: (state, action) => {
      state.isLoding = false
      const target = state.comments.findIndex(
        (comment) => comment.id === action.payload.id);
      state.comments.splice(target, 1, action.payload)
    },
    [__upDateComments.rejected]: (state, action) => {
      state.isLoding = false;
      state.error = action.payload
    },
  }
});

export const { addCommets } = commentsSlice.actions;
export default commentsSlice.reducer;
