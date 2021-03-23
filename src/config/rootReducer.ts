import { combineReducers } from "@reduxjs/toolkit";
import navigation from "features/Navigation/duck";

import sieve from "ducks/sieve";

export function createReducer() {
  return combineReducers({
    ...navigation,
    ...sieve,
  });
}
