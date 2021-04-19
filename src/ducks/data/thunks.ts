import { createAsyncThunk } from '@reduxjs/toolkit';

export const getData = createAsyncThunk(
  'data/getData',
  async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      return true;
    } catch (err) {
      throw err;
    }
  },
);
