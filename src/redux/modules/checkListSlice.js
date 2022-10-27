import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Api from "../../shared/Api";

const initialState = {
  checkList: [],
  isLoading: false,
  error: null,
};

/**Thunk addcheck */
export const __addCheckList = createAsyncThunk(
  "checkList/addCheckList",
  async (checkData, thunkAPI) => {
    console.log("ch", checkData);
    try {
      const { data } = await Api.post("/checkList", checkData);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

/**Thunk getcheck */
export const __getCheckList = createAsyncThunk(
  "checkList/getCheckList",
  async (payload, thunkAPI) => {
    try {
      const { data } = await Api.get("/checkList");
      const newData = data.sort((a, b) => b.id - a.id); //내림차순
      // console.log("new", newData);
      return thunkAPI.fulfillWithValue(newData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

/**Thunk deletecheck */
export const __deleteCheckList = createAsyncThunk(
  "checkLists/deleteCheckList",
  async (checkId, thunkAPI) => {
    try {
      await Api.delete(`/checkList/${checkId}`);
      return thunkAPI.fulfillWithValue(checkId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

/**Thunk editcheck */
export const __editCheckList = createAsyncThunk(
  "checkLists/editCheckList",
  async (checkId, thunkAPI) => {
    try {
      console.log("vd", checkId);
      const { data } = await Api.patch(
        `/checkList/${checkId.id}`,
        checkId.data
      );

      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const checkListSlice = createSlice({
  name: "checkList",
  initialState,
  reducers: {},
  extraReducers: {
    /** 체크리스트 추가하기*/
    [__addCheckList.pending]: (state) => {
      state.isLoading = true;
    },
    [__addCheckList.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.checkList.unshift(action.payload); // push 반대로 입력unshift
    },
    [__addCheckList.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    /**체크리스트 가져오기 */
    [__getCheckList.pending]: (state) => {
      state.isLoading = true;
    },
    [__getCheckList.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.checkList = action.payload;
    },
    [__getCheckList.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    /**댓글 삭제하기 */
    [__deleteCheckList.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteCheckList.fulfilled]: (state, action) => {
      // console.log("ac", action);
      state.isLoading = false;
      const target = state.checkList.findIndex(
        (check) => check.id === action.payload
      );
      state.checkList.splice(target, 1);
    },
    [__deleteCheckList.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    /**댓글 수정하기 */
    [__editCheckList.pending]: (state) => {
      state.isLoading = true;
    },
    [__editCheckList.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log("acw", action);
      const target = state.checkList.findIndex(
        (check) => check.id === action.payload.id
      );
      state.checkList[target] = action.payload;
      // state.checkList.splice(target, 1, action.payload);
    },
    [__editCheckList.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = checkListSlice.actions;
export default checkListSlice.reducer;
