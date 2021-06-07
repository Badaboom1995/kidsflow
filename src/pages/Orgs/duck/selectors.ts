import { OrganizationsState } from ".";
import { createSelector } from "@reduxjs/toolkit";
import { organizationsAdapter } from "./slice";

export const organizationsSelector = (state: OrganizationsState) =>
  state.organizations;
const orgsAdapterSelectors = organizationsAdapter.getSelectors(
  organizationsSelector
);
export const selectOrganizations = createSelector(
  (state: OrganizationsState) => state,
  (state) => orgsAdapterSelectors.selectAll(state)
);
export const selectOrganizationById = (id: string) =>
  createSelector(
    (state: OrganizationsState) => state,
    (state) => orgsAdapterSelectors.selectById(state, id)
  );
