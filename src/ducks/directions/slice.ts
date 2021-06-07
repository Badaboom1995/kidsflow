import { createSlice } from "@reduxjs/toolkit";
import { auth } from "./actions";
import makeReducer from "utils/makeReducer";
import { toast } from "react-toastify";

type InititalState = { data: {}; loading: boolean; token: string };

const intititalState: InititalState = {
  data: null,
  token: null,
  loading: false,
};

const organizatonsSlice = createSlice({
  name: "user",
  initialState: intititalState,
  reducers: {},
  extraReducers: (builder) => {
    makeReducer(
      builder,
      auth,
      (state, payload) => {
        state.data = payload.data?.user;
        state.token = payload.data?.token;
        localStorage.setItem("vzletaemAdminToken", payload.data?.token);
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
