import * as i from 'types';
import { ActionType, action } from 'typesafe-actions';

import { endpoint, fetcher } from 'services/fetcher';

import { DataState } from './types';

export const dataActions = {
  load: () => action('data/GET'),
  success: (success: boolean) => action('data/GET_SUCCESS', success),
  failed: () => action('data/GET_FAILED'),
};

const initialState: DataState = {
  data: [],
  error: false,
  loading: false,
};

export default (state = initialState, action: ActionType<typeof dataActions>) => {
  switch (action.type) {
    case 'data/GET':
      return {
        ...state,
        error: false,
        loading: true,
      };
    case 'data/GET_SUCCESS':
      return {
        ...state,
        data: action.payload,
        error: false,
        loading: false,
      };
    case 'data/GET_FAILED':
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export const getData: i.GetData['thunk'] = () => (dispatch) => {
  new Promise((resolve, reject) => {
    dispatch(dataActions.load());

    return fetcher(endpoint)
      .then((response) => {
        dispatch(dataActions.success(response));
        resolve(response);
      })
      .catch((error) => {
        dispatch(dataActions.failed());
        reject(error);
      });
  });
};
