import { createAsyncThunk } from "@reduxjs/toolkit";
import makeRequest from "utils/makeRequest";

export const searchInit = createAsyncThunk<any, void>(
  "SearchDisplay/searchInit",
  async () => {
    let response;
    try {
      response = await makeRequest("/search", "GET");
    } catch (error) {
      console.log(error);
    }
    return response.data;
  }
);
