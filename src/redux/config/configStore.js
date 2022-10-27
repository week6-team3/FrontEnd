import { configureStore } from "@reduxjs/toolkit";
import posts from "../modules/postsSlice";
import checkList from "../modules/checkListSlice";
import sharings from "../modules/sharingsSlice";
import comments from "../modules/commentsSlice";


import logger from "redux-logger";


const store = configureStore({
  reducer: {
    posts,
    checkList,
    sharings,
    comments,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});

export default store;