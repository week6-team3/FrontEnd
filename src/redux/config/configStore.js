import { configureStore } from "@reduxjs/toolkit";

import logger from "redux-logger";
import comments from "../modules/commentsSlice";
import likes from "../modules/likesSlice";

const store = configureStore({
  reducer: { comments, likes },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});

export default store;