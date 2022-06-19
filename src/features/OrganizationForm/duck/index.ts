import { combineReducers, createSlice } from "@reduxjs/toolkit";
import addOrg from "./slice";






const reducers = {
  addOrg,
};

const combined = combineReducers(reducers);

export type AddOrgState = ReturnType<typeof combined>;

export default reducers;
