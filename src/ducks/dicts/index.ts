import { combineReducers } from "@reduxjs/toolkit";
import dicts from "./slice";

const reducers = {
  dicts,
};

const combined = combineReducers(reducers);

export type DictsState = ReturnType<typeof combined>;

export default reducers;
