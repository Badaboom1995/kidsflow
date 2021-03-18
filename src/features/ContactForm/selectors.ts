import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "app";

export const selectFormState = createSelector(
  (state: RootState) => state,
  (state) => state.contactForm.isOpen
);
