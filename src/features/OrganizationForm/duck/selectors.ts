import { createSelector } from "@reduxjs/toolkit";

import { AddOrgState } from "./index";

export const AddUserFormSelector = (state: AddOrgState) => state.addOrg;
export const uploadIdsSelector = createSelector(
  AddUserFormSelector,
  (addOrg) => addOrg.uploadIds
);
export const imagesSelector = createSelector(
  AddUserFormSelector,
  (addOrg) => addOrg.images
);
export const loadingSelector = createSelector(
  AddUserFormSelector,
  (addOrg) => addOrg.loading
);
export const directionSelector = createSelector(
  AddUserFormSelector,
  (addOrg) => addOrg.directions
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
