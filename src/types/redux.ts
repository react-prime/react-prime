import * as i from 'types';
import { Store as ReduxStore, CombinedState } from 'redux';
import { ThunkAction as IThunkAction, ThunkDispatch as IThunkDispatch } from 'redux-thunk';
import * as reducers from 'ducks';

/**
 * Redux store
 */
export type Store = ReduxStore<CombinedState<i.ReduxState>, i.ActionTypes>;

/**
 * List of all actions types
 */
export type ActionTypes = i.ValueOf<{
  [Reducer in keyof typeof reducers]: Parameters<typeof reducers[Reducer]>[1];
}>;

/**
 * Union of all action names
 */
export type ActionTypeNames = i.ValueOf<{
  [Reducer in keyof typeof reducers]: Parameters<typeof reducers[Reducer]>[1]['type'];
}>;

/*
  Shape of a Redux action
  P = shape of payload
*/
export type Action<P = any> = {
  type: i.ActionTypeNames;
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
export type BaseThunkAction<Fn extends i.AnyFn> = {
  action: Fn;
  thunk: (...args: Parameters<Fn>) => i.ThunkAction<ReturnType<Fn>>;
};
