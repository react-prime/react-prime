import { useDispatch as useReduxDispatch } from 'react-redux';
import * as i from 'types';

export const useDispatch = (): i.ThunkDispatch => {
  return useReduxDispatch<i.ThunkDispatch>();
};
