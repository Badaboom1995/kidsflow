import { combineReducers } from "@reduxjs/toolkit";
import filters from "ducks/filters";

export function createReducer() {
  return combineReducers({ ...filters });
}
