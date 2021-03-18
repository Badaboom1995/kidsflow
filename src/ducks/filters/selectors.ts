import { createSelector } from "@reduxjs/toolkit";

import { FiltersState } from ".";

export const filtersSelector = (state: FiltersState) => state.filters;

export const selectSearchFilter = createSelector(
  filtersSelector,
  (state) => state.search
);
