import { combineReducers } from "@reduxjs/toolkit";
import navigation from "./slice";

const reducers = {
  navigation,
};

const combined = combineReducers(reducers);

export type NavigationState = ReturnType<typeof combined>;

export default reducers;
