import { combineReducers } from "@reduxjs/toolkit";
import eventsForm from "./slice";

const reducers = {
  eventsForm,
};

const combined = combineReducers(reducers);

export type EventsState = ReturnType<typeof combined>;

export default reducers;
