import { createSelector } from "@reduxjs/toolkit";

import { AddUserFormState } from "./";

export const AddUserFormSelector = (state: AddUserFormState) =>
  state.addUserForm;

export const selectChildrenArray = createSelector(
  AddUserFormSelector,
  (state) => state.childrenData
);
