import { createSlice } from "@reduxjs/toolkit";
import { getEventById } from "./actions";
import makeReducer from "utils/makeReducer";
import { toast } from "react-toastify";
import { EventType } from "./types";

const eventsSlice = createSlice({
  name: "eventsForm",
  initialState: {
    loading: false,
    eventData: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    makeReducer(
      builder,
      getEventById,
      (state, payload) => {
        state.eventData = payload.event;
      },
      () => {
        toast.error("Не удалось загрузить организации. Обновите страницу");
      }
    );
  },
});

export default eventsSlice.reducer;
