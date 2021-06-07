import { UserState } from ".";
import { createSelector } from "@reduxjs/toolkit";

export const userSelector = (state: UserState) => state.user;
export const selectUserData = createSelector(userSelector, (user) => user.data);
export const isUserLoading = createSelector(
  userSelector,
  (user) => user.loading
);
