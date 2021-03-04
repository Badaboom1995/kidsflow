import { combineReducers } from "@reduxjs/toolkit";
import categories from "./slice";

const reducers = {
  categories,
};

const combined = combineReducers(reducers);

export type FfiltersState = ReturnType<typeof combined>;

export default reducers;
