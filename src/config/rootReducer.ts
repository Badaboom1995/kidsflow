import { combineReducers } from "@reduxjs/toolkit";
import navigation from "features/Navigation/duck";
import addUserForm from "features/AddUserForm/duck";
import addOrg from "features/OrganizationForm/duck";
import organizations from "features/OrganizationsTable/duck";
import events from "features/EventsTable/duck";
import eventsForm from "features/EventsAdd/duck";
import uploads from "parts/UploadSection/duck";
import organizatonsPicker from "features/ChooseOrganizations/duck"
import highlights from "features/HighlightsAdd/duck"
import highlightsTable from "features/HighlightsTable/duck"

import sieve from "ducks/sieve";
import user from "ducks/user";
import dicts from "ducks/dicts";

export function createReducer() {
  return combineReducers({
    ...dicts,
    ...navigation,
    ...sieve,
    ...user,
    ...addUserForm,
    ...organizations,
    ...events,
    ...eventsForm,
    ...addOrg,
    ...uploads,
    ...organizatonsPicker,
    ...highlights,
    ...highlightsTable
  });
}
