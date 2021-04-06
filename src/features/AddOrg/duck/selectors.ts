import { createSelector } from "@reduxjs/toolkit";

import { AddOrgState } from "./index";

export const AddUserFormSelector = (state: AddOrgState) => state.addOrg;
