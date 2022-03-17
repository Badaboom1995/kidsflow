import { HighlightsState } from ".";
import { createSelector } from "@reduxjs/toolkit";
import { highlightsAdapter } from "./slice";

export const highlightsSelector = (state: HighlightsState) => state.highlightsTable;
const highlightsAdapterSelectors = highlightsAdapter.getSelectors(highlightsSelector);
export const selectHighlights = createSelector(
  (state: HighlightsState) => state,
  (state) => highlightsAdapterSelectors.selectAll(state)
);
