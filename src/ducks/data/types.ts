import * as i from 'types';

export type DataState = {
  data?: any;
  error: boolean;
  loading: boolean;
};

export type GetData = i.BaseThunkAction<() => void>;
