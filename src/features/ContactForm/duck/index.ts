import { combineReducers } from "@reduxjs/toolkit";
import contactForm from "./slice";

const reducers = {
  contactForm,
};

const combined = combineReducers(reducers);

export type ContactState = ReturnType<typeof combined>;

export default reducers;
