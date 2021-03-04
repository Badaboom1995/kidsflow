import { combineReducers } from "@reduxjs/toolkit";
import kinds from "./slice";

const reducers = {
  kinds,
};

const combined = combineReducers(reducers);

export type FiltersState = ReturnType<typeof combined>;

export default reducers;
