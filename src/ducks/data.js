/**
 * This is an example file from react-prime
 */
import createAction from 'services/createAction';

const GET_DATA = 'data/GET';
const GET_DATA_SUCCESS = 'data/GET_SUCCESS';
const GET_DATA_FAILED = 'data/GET_FAILED';

const initialState = {
  data: {},
  error: false,
  loading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case GET_DATA:
    return {
      ...state,
      error: false,
      loading: true,
    };
  case GET_DATA_SUCCESS:
    return {
      ...state,
      data: payload,
      error: false,
      loading: false,
    };
  case GET_DATA_FAILED:
    return {
      ...state,
      loading: false,
      error: true,
    };
  default:
    return state;
  }
};

export const getDataSuccess = createAction(GET_DATA_SUCCESS);
export const getDataFailed = createAction(GET_DATA_FAILED);

export const getData = () => (dispatch) => {
  dispatch({ type: GET_DATA });

  setTimeout(() => {
    dispatch(getDataSuccess({ success: true }));
  }, 2000);
};
