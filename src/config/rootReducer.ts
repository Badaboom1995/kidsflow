import { combineReducers } from "@reduxjs/toolkit";
import navigation from "features/Navigation/duck";

import filters from "ducks/filters";

export function createReducer() {
  return combineReducers({
    ...navigation,
    ...filters,
  });
}
