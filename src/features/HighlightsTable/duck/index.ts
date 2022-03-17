import { combineReducers } from "@reduxjs/toolkit";
import highlightsTable from "./slice";

const reducers = {
  highlightsTable,
};

const combined = combineReducers(reducers);

export type HighlightsState = ReturnType<typeof combined>;

export default reducers;
