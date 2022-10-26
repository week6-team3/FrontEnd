import { configureStore } from "@reduxjs/toolkit";
import posts from "../modules/postsSlice";
import checkList from "../modules/checkListSlice";
import sharings from "../modules/sharingsSlice";
import users from "../modules/usersSlice";

import logger from "redux-logger";

const store = configureStore({
  reducer: {
    posts,
    checkList,
    sharings,
    users,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});

export default store;
