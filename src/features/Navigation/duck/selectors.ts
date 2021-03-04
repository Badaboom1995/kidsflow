import { createSelector } from "@reduxjs/toolkit";

import { NavigationState } from "./";

export const navigationSelector = (state: NavigationState) => state.navigation;

export const selectIsOpen = () =>
  createSelector(navigationSelector, (state) => state.isOpen);
