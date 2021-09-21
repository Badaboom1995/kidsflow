import { combineReducers } from "@reduxjs/toolkit";
import uploads from "./slice";

const reducers = {
  uploads,
};

const combined = combineReducers(reducers);

export type UploadsState = ReturnType<typeof combined>;

export default reducers;
