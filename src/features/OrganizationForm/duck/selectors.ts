import { createSelector } from "@reduxjs/toolkit";

import { AddOrgState } from "./index";

export const AddUserFormSelector = (state: AddOrgState) => state.addOrg;
export const uploadIdsSelector = createSelector(
  AddUserFormSelector,
  (addOrg) => addOrg.uploadIds
);
export const scheduleSelector = createSelector(
  AddUserFormSelector,
  (addOrg) => addOrg.businessHours
);
export const promptsSelector = createSelector(
  AddUserFormSelector,
  (addOrg) => addOrg.prompts
);
export const imagesSelector = createSelector(
  AddUserFormSelector,
  (addOrg) => addOrg.images
);
export const stationsSelector = createSelector(
  AddUserFormSelector,
  (addOrg) => addOrg.stations
);
export const loadingSelector = createSelector(
  AddUserFormSelector,
  (addOrg) => addOrg.loading
);
export const directionSelector = createSelector(AddUserFormSelector, (addOrg) =>
  addOrg.directions.filter((item) => item.value !== "OnlineSchool")
);
export const isOnlineSchool = createSelector(
  AddUserFormSelector,
  (addOrg) => addOrg.isOnline
);
export const categorySelector = createSelector(
  AddUserFormSelector,
  (addOrg) => addOrg.categories
);
export const partnerSelector = createSelector(
  AddUserFormSelector,
  (addOrg) => addOrg.partners
);
export const currentDirectionSelector = createSelector(
  AddUserFormSelector,
  (addOrg) => addOrg.currentDirection
);
export const dataSelector = createSelector(
  AddUserFormSelector,
  (addOrg) => addOrg.data
);
