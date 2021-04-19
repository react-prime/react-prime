import { createAsyncThunk } from '@reduxjs/toolkit';

export const getData = createAsyncThunk(
  // This is a prefix for this thunks's lifecycle.
  // It will automatically generate 3 actions appended with '/pending', '/fulfilled' or '/rejected'
  'data/GET_DATA',
  async (_, { dispatch }) => {
    // This is no longer necessary, but it can still be done this way if needed
    // import { dataSlice } from 'ducks/data';
    // dispatch(dataSlice.actions.load());

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // The payload is now automatically typed as 'number'
      return true;

      // If you are returning something from an API call, type it as this
      // return response as MyResponseType;
    } catch (err) {
      // Calling throw will automatically dispatch the '/rejected' action
      throw err;
    }
  },
);
