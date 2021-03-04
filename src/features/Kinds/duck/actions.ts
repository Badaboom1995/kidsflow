import { createAsyncThunk } from "@reduxjs/toolkit";
import eventsService from "services/kinds";

export const loadKinds = createAsyncThunk<any, void>("kinds/get", async () => {
  const res = await eventsService.getKinds();
  return res;
});
