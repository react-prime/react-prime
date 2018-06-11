import createAction from 'services/createAction';

const INSTALLATION_PENDING = 'INSTALLATION_PENDING';
const INSTALLATION_SUCCESS = 'INSTALLATION_SUCCESS';
const INSTALLATION_FAILED = 'INSTALLATION_FAILED';

const initialState = {
  passed: false,
  error: false,
  loading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case INSTALLATION_SUCCESS:
      return {
        ...state,
        passed: payload.passed,
        loading: false,
      };
    case INSTALLATION_FAILED:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case INSTALLATION_PENDING:
      return {
        ...state,
        loading: true,
        error: false,
      };
    default:
      return state;
  }
};

export const installSuccess = createAction(INSTALLATION_SUCCESS);
export const installFailed = createAction(INSTALLATION_FAILED);

export const install = () => (dispatch) => {
  dispatch({ type: INSTALLATION_PENDING });

  setTimeout(() => {
    dispatch(installSuccess({ passed: true }));
  }, 2000);
};
