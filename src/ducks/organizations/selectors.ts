import { createSelector } from "@reduxjs/toolkit";

import { OrganizationsState } from ".";
import { organizationsAdapter } from "./slice";

export const orgsSelector = (state: OrganizationsState) => state.organizations;
const orgsSelectors = organizationsAdapter.getSelectors(orgsSelector);

export const selectAllOrgs = createSelector(
  (state: OrganizationsState) => state,
  (state) => orgsSelectors.selectAll(state)
);
export const selectSomeOrgs = (size: number) =>
  createSelector(
    (state: OrganizationsState) => state,
    (state) => orgsSelectors.selectAll(state).slice(0, size)
  );
export const selectWithFilter = (prop: string, filter: string) =>
  createSelector(
    (state: OrganizationsState) => state,
    (state) => {
      return orgsSelectors
        .selectAll(state)
        .filter((item) =>
          `${item[prop]}`.toUpperCase().includes(`${filter.toUpperCase()}`)
        );
    }
  );
