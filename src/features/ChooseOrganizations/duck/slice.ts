import { createSlice } from "@reduxjs/toolkit";
import { OrganizationType } from 'features/OrganizationsTable/duck/types'
type initialState = {
  entities: OrganizationType[];
};

export const initialState: initialState = {
  entities: [],
};

const organizationsPickerSlice = createSlice({
  name: "organizationsPicker",
  initialState: initialState,
  reducers: {
    addOrganizations(state, { payload }) {
      state.entities = [...state.entities, ...payload]
    },

  },
});

export const { addOrganizations } = organizationsPickerSlice.actions;

export default organizationsPickerSlice.reducer;
