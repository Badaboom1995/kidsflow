import { createSlice } from "@reduxjs/toolkit";
import { addImage, deleteExtraImage } from "./actions";
import makeReducer from "utils/makeReducer";
import { toast } from "react-toastify";

const uploadsSlice = createSlice({
  name: "uploads",
  initialState: { images: [], loading: false },
  reducers: {
    deleteImage(state, { payload }) {
      state.images = state.images.filter((item) => item.id !== payload);
    },
    clearUploads(state) {
      state.images = []
    },
  },
  extraReducers: (builder) => {
    makeReducer(
      builder,
      addImage,
      (state, payload) => {
        state.images.push(payload);
      },
      () => {
        toast.error("Неудача");
      }
    );
    makeReducer(
      builder,
      deleteExtraImage,
      (state, payload) => {
        state.images = state.images.filter((item) => item.id !== payload);
      },
      () => {
        toast.error("Неудача");
      }
    );
  },
});

export const { deleteImage, clearUploads } = uploadsSlice.actions;

export default uploadsSlice.reducer;
