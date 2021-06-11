import { combineReducers } from "@reduxjs/toolkit";
import navigation from "features/Navigation/duck";
import addUserForm from "features/AddUserForm/duck";
import addOrg from "features/AddOrg/duck";
import organizations from "pages/Orgs/duck";

import sieve from "ducks/sieve";
import user from "ducks/user";

export function createReducer() {
  return combineReducers({
    ...navigation,
    ...sieve,
    ...user,
    ...addUserForm,
    ...organizations,
    ...addOrg,
  });
}
