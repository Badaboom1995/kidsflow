import { combineReducers } from "@reduxjs/toolkit";
import directions from "./slice";

const reducers = {
  directions,
};

const combined = combineReducers(reducers);

export type DirectionsState = ReturnType<typeof combined>;

export default reducers;
