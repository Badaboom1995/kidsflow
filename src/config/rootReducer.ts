import { combineReducers } from "@reduxjs/toolkit";
import navigation from "features/Navigation/duck";
import kinds from "features/Kinds/duck";
import categories from "features/Categories/duck";

export function createReducer() {
  return combineReducers({
    ...navigation,
    ...kinds,
    ...categories,
  });
}
