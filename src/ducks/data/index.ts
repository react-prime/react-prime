/**
 * This is an example file from react-prime
 */
import * as i from 'types';
import { createSlice } from '@reduxjs/toolkit';
import { getData } from './thunks';

const initialState: i.DataState = {
  data: undefined,
  error: false,
  loading: false,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    load: (state) => {
      state.loading = true;
      state.error = false;
    },
    failed: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
  extraReducers: (builder) => {
    // getData reducers
    builder.addCase(getData.pending, (state) => {
      state.loading = true;
      state.error = false;
    });

    builder.addCase(getData.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.loading = false;
    });

    builder.addCase(getData.rejected, (state) => {
      state.error = true;
    });

    // other reducers
    // ...
  },
});

export default dataSlice.reducer;
