import { createSelector } from "@reduxjs/toolkit";

import { AddOrgState } from "./index";

export const AddUserFormSelector = (state: AddOrgState) => state.addOrg;
export const uploadIdsSelector = createSelector(
  AddUserFormSelector,
  (user) => user.uploadIds
);
export const directionSelector = createSelector(
  AddUserFormSelector,
  (user) => user.direction
);
