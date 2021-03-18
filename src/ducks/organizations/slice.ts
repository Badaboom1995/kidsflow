import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import makeReducer from "utils/makeRreducer";
import { OrganizationType } from "./types";
import { getOrganizationsInView } from "./actions";

export const organizationsAdapter = createEntityAdapter<OrganizationType>({
  selectId: (org) => org?.id,
  sortComparer: (a, b) => a.name?.localeCompare(b.name),
});
const orgSelectors = organizationsAdapter.getSelectors();

const organizatonsSlice = createSlice({
  name: "organizations",
  initialState: organizationsAdapter.getInitialState(),
  reducers: {
    setActive(state, { payload }) {
      organizationsAdapter.updateOne(state, {
        id: payload,
        changes: { active: true },
      });
    },
    chooseOrg(state, { payload }) {
      const prevChoosedOrgId = orgSelectors
        .selectAll(state)
        .find((item) => item.choosed)?.id;
      organizationsAdapter.updateMany(state, [
        {
          id: prevChoosedOrgId,
          changes: { choosed: false },
        },
        {
          id: payload,
          changes: { choosed: true },
        },
      ]);
    },
  },
  extraReducers: (builder) => {
    makeReducer(
      builder,
      getOrganizationsInView,
      (state, payload) => {
        organizationsAdapter.addMany(state, payload.data);
      },
      () => {
        console.log("error");
      }
    );
  },
});
export const { setActive, chooseOrg } = organizatonsSlice.actions;

export default organizatonsSlice.reducer;
