import { configureStore } from "@reduxjs/toolkit";

import logger from "redux-logger";

const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});

export default store;
