import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import { createReducer } from "./rootReducer";

export function configureAppStore() {
  const store = configureStore({
    reducer: createReducer(),
    middleware: [...getDefaultMiddleware()],
    devTools: process.env.NODE_ENV !== "production",
  });

  return store;
}
