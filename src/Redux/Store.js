import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./rootReducer";
import { setupListeners } from "@reduxjs/toolkit/query";
import { movieApi,tvShowApi } from "../Utils/services";
export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(movieApi.middleware)
      .concat(tvShowApi.middleware),
});
setupListeners(store.dispatch);
