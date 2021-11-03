import { createAsyncThunk } from "@reduxjs/toolkit";
import { addImageProps, deleteImageProps } from "./types";

export const addImage = createAsyncThunk<any, addImageProps>(
  "uploads/add",
  async ({ method, file }) => {
    try {
      const res = await method(file);
      const data = res.data ? res.data[0] : res[0];
      return { id: data.uploadId, url: data.cloudUrl };
    } catch (error) {
      throw error;
    }
  }
);
export const deleteExtraImage = createAsyncThunk<any, any>(
  "uploads/delete",
  async ({ method, id, uploadId }) => {
    try {
      await method({ id, uploadId });
      return uploadId;
    } catch (error) {
      throw error;
    }
  }
);
