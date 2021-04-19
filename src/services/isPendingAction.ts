import { AnyAction } from 'redux';
import { AsyncThunk } from '@reduxjs/toolkit';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;
type PendingAction = ReturnType<GenericAsyncThunk['pending']>;

export default function isPendingAction(action: AnyAction): action is PendingAction {
  return action.type.endsWith('/pending');
}
