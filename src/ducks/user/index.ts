import { combineReducers } from "@reduxjs/toolkit";
import user from "./slice";

const reducers = {
  user,
};

const combined = combineReducers(reducers);

export type UserState = ReturnType<typeof combined>;

export default reducers;
