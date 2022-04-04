import { HighlightsState } from ".";
import { createSelector } from "@reduxjs/toolkit";

export const eventsSelector = (state: HighlightsState) => state.highlights;

export const selectSortedStories = createSelector(
    eventsSelector,
    (state) => [...state.stories].sort((prev, next) => prev.order < next.order ? -1 : 1)
);
export const selectStoryById = (id) => createSelector(
    eventsSelector,
    (state) => state.stories.find(item => item.id === id)
);
