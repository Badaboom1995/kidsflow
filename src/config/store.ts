/**
 * Create the store with dynamic reducers
 */

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import { createReducer } from "./rootReducer";

export function configureAppStore() {
  // Create the store with saga middleware]

  const store = configureStore({
    reducer: createReducer(),
    middleware: [...getDefaultMiddleware()],
    devTools: process.env.NODE_ENV !== "production",
  });

  return store;
}
