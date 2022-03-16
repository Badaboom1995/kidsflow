import { combineReducers } from "@reduxjs/toolkit";
import highlights from "./slice";

const reducers = {
  highlights,
};

const combined = combineReducers(reducers);

export type HighlightsState = ReturnType<typeof combined>;

export default reducers;
