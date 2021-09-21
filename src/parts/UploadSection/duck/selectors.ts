import { createSelector } from "@reduxjs/toolkit";

import { UploadsState } from "./index";

export const UploadsSelector = (state: UploadsState) => state.uploads;

export const imagesSelector = createSelector(
  UploadsSelector,
  (addOrg) => addOrg.images
);
export const isLoading = createSelector(
  UploadsSelector,
  (addOrg) => addOrg.loading
);
