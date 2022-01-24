import { createSelector } from "@reduxjs/toolkit";

import { OrganizationsPickerState } from ".";

export const organizationsPickerSelector = (state: OrganizationsPickerState) => state.organizationsPicker;

export const selectOrganizations = () =>
  createSelector(organizationsPickerSelector, (state) => state.entities);
