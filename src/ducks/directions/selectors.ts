import { DirectionsState } from ".";
import { createSelector } from "@reduxjs/toolkit";

export const userSelector = (state: DirectionsState) => state.directions;
export const selectUserData = createSelector(userSelector, (user) => user.data);
export const isUserLoading = createSelector(
  userSelector,
  (user) => user.loading
);
