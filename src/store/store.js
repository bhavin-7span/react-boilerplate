import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user";
import { api } from "../services/api";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [userSlice.name]: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
