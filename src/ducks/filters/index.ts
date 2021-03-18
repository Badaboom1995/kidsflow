import { combineReducers } from "@reduxjs/toolkit";
import filters from "./slice";

const reducers = {
  filters,
};

const combined = combineReducers(reducers);

export type FiltersState = ReturnType<typeof combined>;

export default reducers;
