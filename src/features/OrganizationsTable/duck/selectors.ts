import { OrganizationsState } from ".";
import { createSelector } from "@reduxjs/toolkit";
import { organizationsAdapter } from "./slice";
import { imagePlaceholder } from "config/constants";

export const organizationsSelector = (state: OrganizationsState) =>
  state.organizations;
const orgsAdapterSelectors = organizationsAdapter.getSelectors(
  organizationsSelector
);
export const selectOrganizations = createSelector(
  (state: OrganizationsState) => state,
  (state) => orgsAdapterSelectors.selectAll(state)
);
export const selectNormalizedOrganizations = createSelector(
  (state: OrganizationsState) => selectOrganizations(state),
  (organizations) => organizations.map((item) => ({
    ...item,
    eventType: item.eventTypes[0],
    eventCategories: item.eventCategories
      .filter((category) => item.eventTypes[0] !== category)
      .join(),
    photos: item.photos
      ? item.photos[0]?.cloudUrl
      : imagePlaceholder,
    partner: item.partner ? item.partner.firstName : 'Нет партнера',
    status: item.isActive ? 'Активный' : 'Заблокирован',
  }))
);

export const selectOrganizationById = (id: string) =>
  createSelector(
    (state: OrganizationsState) => state,
    (state) => orgsAdapterSelectors.selectById(state, id)
  );
export const selectPagination = createSelector(
  (state: OrganizationsState) => state.organizations,
  ({ totalEntities, pageNumber, pageSize }) => ({
    totalEntities,
    pageNumber,
    pageSize,
  })
);
