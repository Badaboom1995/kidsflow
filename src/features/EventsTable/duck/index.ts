import { combineReducers } from "@reduxjs/toolkit";
import events from "./slice";

const reducers = {
  events,
};

const combined = combineReducers(reducers);

export type OrganizationsState = ReturnType<typeof combined>;

export default reducers;
