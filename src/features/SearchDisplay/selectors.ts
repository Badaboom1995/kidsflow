import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "app";

export const selectActiveFilters = () => {
  return createSelector(
    (state: RootState) => state,
    (filters) => filters
  );
};
