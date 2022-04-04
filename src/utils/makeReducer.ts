const makeReducer = (
  builder: any,
  action: any,
  onSuccess: (state: any, payload: any) => any,
  onFail: any,
  noLoading?: boolean
) => {
  builder.addCase(action.pending, (state: any, action: any) => {
    if (!noLoading) state.loading = true;
  });
  builder.addCase(action.fulfilled, (state: any, action: { payload: any }) => {
    if (!noLoading) state.loading = false;
    onSuccess(state, action.payload);
  });
  builder.addCase(action.rejected, (state: any, action: any) => {
    if (!noLoading) state.loading = false;
    console.log(action)
    onFail(state, action);
  });
};

export default makeReducer;
