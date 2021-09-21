import { createAsyncThunk } from "@reduxjs/toolkit";
import { addImageProps, deleteImageProps } from "./types";

export const addImage = createAsyncThunk<any, addImageProps>(
  "uploads/add",
  async ({ method, file }) => {
    try {
      const res = await method(file);
      const data = res.data[0];
      return { id: data.uploadId, url: data.cloudUrl };
    } catch (error) {
      throw error;
    }
  }
);
export const deleteImage = createAsyncThunk<any, deleteImageProps>(
  "uploads/delete",
  async ({ method, orgId, uploadId }) => {
    try {
      method(orgId, uploadId);
      return uploadId;
    } catch (error) {
      throw error;
    }
  }
);
