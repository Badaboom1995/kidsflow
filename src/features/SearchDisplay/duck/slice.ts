import { createSlice } from '@reduxjs/toolkit'

type SearchDisplayState = {
  loading: Boolean
}

const initialState: SearchDisplayState = {
  loading: false,
}

const SearchDisplaySlice = createSlice({
  name: 'SearchDisplay',
  initialState: initialState,
  reducers: {
    example(state, action) {
      state.loading = action.payload
    },
    extraReducers: builder => {
      // builder.addCase(searchInit.pending, state => {
      //   state.status = Status.WAITING
      // })
      // builder.addCase(searchInit.fulfilled, (state, action) => {
      //   state.status = Status.READY
      //   state.searchId = action.payload.searchId
      // })
      // builder.addCase(searchInit.rejected, state => {
      //   state.status = Status.ERROR
      // })
    },
  },
})

export const {} = SearchDisplaySlice.actions
export default SearchDisplaySlice



