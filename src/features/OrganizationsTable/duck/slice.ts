import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getOrganizations } from "./actions";
import makeReducer from "utils/makeReducer";
import { toast } from "react-toastify";
import { OrganizationType } from "./types";

export const organizationsAdapter = createEntityAdapter<OrganizationType>({
  selectId: (org) => org?.entityId,
  sortComparer: (a, b) => (a.entityId > b.entityId ? -1 : 1),
});

const organizatonsSlice = createSlice({
  name: "organizations",
  initialState: {
    loading: false,
    totalEntities: null,
    pageSize: null,
    pageNumber: 0,
    ...organizationsAdapter.getInitialState(),
  },
  reducers: {},
  extraReducers: (builder) => {
    makeReducer(
      builder,
      getOrganizations,
      (state, payload) => {
        console.log(payload);
        state.totalEntities = payload.totalEntities;
        state.pageSize = payload.pageSize;
        state.pageNumber = payload.pageNumber;
        organizationsAdapter.setAll(state, payload.entities);
      },
      () => {
        toast.error("Не удалось загрузить организации. Обновите страницу");
      }
    );
  },
});

export default organizatonsSlice.reducer;
