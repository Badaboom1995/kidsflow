import { combineReducers } from "@reduxjs/toolkit";
import sieve from "./slice";

const reducers = {
  sieve,
};

const combined = combineReducers(reducers);

export type SieveState = ReturnType<typeof combined>;

export default reducers;
