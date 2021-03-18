import { combineReducers } from "@reduxjs/toolkit";
import organizations from "./slice";

const reducers = {
  organizations,
};

const combined = combineReducers(reducers);

export type OrganizationsState = ReturnType<typeof combined>;

export default reducers;
