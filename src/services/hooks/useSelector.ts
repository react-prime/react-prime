import { useSelector as reactReduxUseSelector, TypedUseSelectorHook } from 'react-redux';
import * as i from 'types';

export const useSelector: TypedUseSelectorHook<i.ReduxState> = reactReduxUseSelector;
