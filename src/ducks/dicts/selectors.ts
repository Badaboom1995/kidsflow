import { DictsState } from ".";
import { createSelector } from "@reduxjs/toolkit";

export const userSelector = (state: DictsState) => state.dicts;
export const selectDirections = createSelector(
  userSelector,
  (dicts) => dicts.directions
);
export const selectCategories = createSelector(
  userSelector,
  (dicts) => dicts.categories
);
export const selectPartners = createSelector(
  userSelector,
  (dicts) => dicts.partners
);
