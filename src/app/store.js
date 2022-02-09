import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../sevices/cryptoApi";
import { cryptoNewsApi } from "../sevices/cryptoNews";

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
});
