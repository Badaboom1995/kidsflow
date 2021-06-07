import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getOrganizations } from "./actions";
import makeReducer from "utils/makeReducer";
import { toast } from "react-toastify";
import { OrganizationType } from "./types";

export const organizationsAdapter = createEntityAdapter<OrganizationType>({
  selectId: (org) => org?.entityId,
  sortComparer: (a, b) => a.name?.localeCompare(b.name),
});

const organizatonsSlice = createSlice({
  name: "organizations",
  initialState: { loading: false, ...organizationsAdapter.getInitialState() },
  reducers: {},
  extraReducers: (builder) => {
    makeReducer(
      builder,
      getOrganizations,
      (state, payload) => {
        organizationsAdapter.setAll(state, payload.entities);
      },
      () => {
        toast.error("Неверный логин или пароль");
        console.log("error");
      }
    );
  },
});
export const {} = organizatonsSlice.actions;

export default organizatonsSlice.reducer;
