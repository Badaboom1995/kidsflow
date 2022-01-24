import { combineReducers } from "@reduxjs/toolkit";
import organizationsPicker from "./slice";

const reducers = {
  organizationsPicker,
};

const combined = combineReducers(reducers);

export type OrganizationsPickerState = ReturnType<typeof combined>;

export default reducers;
