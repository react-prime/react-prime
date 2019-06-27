import * as i from 'types';
import { ThunkAction as IThunkAction } from 'redux-thunk';

/*
  Shape of a Redux action
  P = shape of payload
*/
export type Action<P = any> = {
  type: string;
  payload?: P;
  error?: boolean;
  meta?: any;
};

/*
  Thunk action type with pre-filled generics
  ReturnType = return type of function
*/
export type ThunkAction<ReturnType = void> = IThunkAction<ReturnType, i.ReduxState, {}, i.Action>;
