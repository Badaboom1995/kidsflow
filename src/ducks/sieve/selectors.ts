import { createSelector } from "@reduxjs/toolkit";

import { SieveState } from ".";
import { SieveType } from "./types";

export const sievesSelector = (state: SieveState) => state.sieve;

export const selectSieveByType = (type: SieveType) =>
  createSelector(sievesSelector, (state) => state[type]);
// TODO
export const selectFilter = createSelector(
  sievesSelector,
  (state) => state.filter
);
export const selectSort = createSelector(sievesSelector, (state) => state.sort);

const StringifyValues = (items: Record<string, string>[]) =>
  items.map((item) =>
    Object.keys(item).reduce(
      (accum, key) => ({ ...accum, [key]: item[key]?.toString() }),
      {}
    )
  );
// TODO. type for entities. generic??
export const selectFilteredData = (entities: Record<string, string>[]) =>
  createSelector(selectFilter, (sieve) =>
    StringifyValues(entities).filter((item) => {
      let filterPassed = true;
      sieve?.forEach((sieveItem) => {
        const sieveKey = Object.keys(sieveItem)[0];
        if (!item[sieveKey].includes(sieveItem[sieveKey])) {
          filterPassed = false;
        }
      });
      return filterPassed;
    })
  );
// TODO.
export const selectSortedData = (entities: Record<string, string>[]) => {
  createSelector(
    selectFilteredData(entities),
    selectSort,
    (filteredData, sortSieve) =>
      filteredData.sort((prev, next) =>
        prev[Object.keys(sortSieve)[0]].localCompare(
          next[Object.keys(sortSieve)[0]]
        )
      )
  );
};
