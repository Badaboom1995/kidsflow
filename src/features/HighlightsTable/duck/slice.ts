import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getHighlights } from "./actions";
import makeReducer from "utils/makeReducer";
import { toast } from "react-toastify";
import { HighlightType } from "./types";

export const highlightsAdapter = createEntityAdapter<HighlightType>({
  selectId: (highlight) => highlight?.highlightId,
  sortComparer: (a, b) => (a.highlightId > b.highlightId ? -1 : 1),
});

const highlightsSlice = createSlice({
  name: "highlightsTable",
  initialState: {
    loading: false,
    totalEntities: null,
    pageSize: null,
    pageNumber: 0,
    ...highlightsAdapter.getInitialState(),
  },
  reducers: {},
  extraReducers: (builder) => {
    makeReducer(
      builder,
      getHighlights,
      (state, entities) => {
        // state.totalEntities = payload.totalEntities;
        // state.pageSize = payload.pageSize;
        // state.pageNumber = payload.pageNumber;
        highlightsAdapter.setAll(state, entities);
      },
      () => {
        toast.error("Не удалось загрузить организации. Обновите страницу");
      }
    );
  },
});

export default highlightsSlice.reducer;
