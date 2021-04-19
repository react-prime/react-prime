/**
 * This is an example file from react-prime
 */
import * as i from 'types';
import { createSlice } from '@reduxjs/toolkit';

import isPendingAction from 'services/isPendingAction';

import { getData } from './thunks';

const initialState: i.DataState = {
  data: undefined,
  error: false,
  loading: false,
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,

  // Any general/non-thunk reducers go here
  reducers: {},

  // Thunk reducers go here
  extraReducers: (reducer) => {
    // The 'reducer' arg is a functional way to handle switch cases
    // It provides fully automated type safety

    // getData reducers
    // Payload is automatically typed to what type is returned in the getData thunk
    reducer.addCase(getData.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.loading = false;
    });

    // Any throw call is redirected to this case
    reducer.addCase(getData.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });

    // other thunk cases
    // ...

    // All thunks for this slice will set loading to true
    // This is not necessarily the way to go, but is an example for how to simplify this state change
    reducer.addMatcher(isPendingAction, (state) => {
      state.loading = true;
    });
  },
});

export default dataSlice.reducer;
