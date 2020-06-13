import * as i from 'types';
import { Store as ReduxStore, CombinedState } from 'redux';
import { ThunkAction as IThunkAction, ThunkDispatch as IThunkDispatch } from 'redux-thunk';
import * as reducers from 'ducks';

/**
 * Store type
 */
export type Store = ReduxStore<CombinedState<i.ReduxState>, i.ActionTypes>;

/**
 * Generates a list of all actions types
 */
export type ActionTypes = i.ValueOf<{
  [Reducer in keyof typeof reducers]: Parameters<typeof reducers[Reducer]>[1];
}>;

/**
 * Generates a union of all action names
 */
export type ActionTypeNames = i.ValueOf<{
  [Reducer in keyof typeof reducers]: Parameters<typeof reducers[Reducer]>[1]['type'];
}>;

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
  Thunk Dispatch action with pre-filled generics
*/
export type ThunkDispatch = IThunkDispatch<i.ReduxState, any, i.Action>;

/*
  Thunk action type with pre-filled generics
  ReturnType = return type of function

  ExtraArguments is passed as third argument in a thunk
*/
type ExtraArgument = i.AnyObject;
export type ThunkAction<ReturnType = void> = IThunkAction<ReturnType, i.ReduxState, ExtraArgument, i.Action>;

/*
  Generator type for thunk actions
  Pass the function type as type argument and it will return an action for components and ducks
*/
export type BaseThunkAction<Fn extends (...args: any) => any> = {
  action: (...args: Parameters<Fn>) => ReturnType<Fn>;
  thunk: (...args: Parameters<Fn>) => i.ThunkAction<ReturnType<Fn>>;
};
