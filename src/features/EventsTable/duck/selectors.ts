import { OrganizationsState } from ".";
import { createSelector } from "@reduxjs/toolkit";
import { eventsAdapter } from "./slice";

export const organizationsSelector = (state: OrganizationsState) =>
  state.events;
const orgsAdapterSelectors = eventsAdapter.getSelectors(organizationsSelector);
export const selectEvents = createSelector(
  (state: OrganizationsState) => state,
  (state) => orgsAdapterSelectors.selectAll(state)
);
export const selectOrganizationById = (id: string) =>
  createSelector(
    (state: OrganizationsState) => state,
    (state) => orgsAdapterSelectors.selectById(state, id)
  );
export const selectPagination = createSelector(
  (state: OrganizationsState) => state.events,
  ({ totalEntities, pageNumber, pageSize }) => ({
    totalEntities,
    pageNumber,
    pageSize,
  })
);
