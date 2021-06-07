const makeReducer = (
  builder: any,
  action: any,
  onSuccess: (state: any, payload: any) => any,
  onFail: any
) => {
  builder.addCase(action.pending, (state: any, action: any) => {
    state.loading = true;
  });
  builder.addCase(action.fulfilled, (state: any, action: { payload: any }) => {
    state.loading = false;
    onSuccess(state, action.payload);
  });
  builder.addCase(action.rejected, (state: any, action: any) => {
    state.loading = false;
    onFail(state, action);
  });
};

export default makeReducer;
