import { combineReducers } from "@reduxjs/toolkit";
import navigation from "features/Navigation/duck";
import kinds from "features/Kinds/duck";
import categories from "features/Categories/duck";
import contactForm from "features/ContactForm/duck";
import organizations from "ducks/organizations";
import filters from "ducks/filters";

export function createReducer() {
  return combineReducers({
    ...navigation,
    ...kinds,
    ...categories,
    ...contactForm,
    ...organizations,
    ...filters,
  });
}
