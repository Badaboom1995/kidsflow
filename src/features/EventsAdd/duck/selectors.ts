import { EventsState } from ".";
import { createSelector } from "@reduxjs/toolkit";

export const eventsSelector = (state: EventsState) => state.eventsForm;

export const selectCurrentEvent = createSelector(
  eventsSelector,
  (state) => state.eventData
);
export const selectLoading = createSelector(
  eventsSelector,
  (state) => state.loading
);
export const selectPrompts = createSelector(
  eventsSelector,
  (state) => state.orgPrompts
);
export const selectOrganizationName = createSelector(
  eventsSelector,
  (state) => state.extraData.organizationName
);
export const selectExtraData = createSelector(
  eventsSelector,
  (state) => state.extraData
);
