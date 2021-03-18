import { combineReducers } from '@reduxjs/toolkit'
import slice from './slice'

const reducers = {
  SearchDisplay: slice.reducer,
}

const combined = combineReducers(reducers)

export type SearchDisplayState = ReturnType<typeof combined>

export default reducers

