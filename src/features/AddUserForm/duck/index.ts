import { combineReducers } from "@reduxjs/toolkit";
import addUserForm from "./slice";

const reducers = {
  addUserForm,
};

const combined = combineReducers(reducers);

export type AddUserFormState = ReturnType<typeof combined>;

export default reducers;
