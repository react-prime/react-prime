import createAction from 'services/createAction';

const TEST_PENDING = 'TEST_PENDING';
const TEST_SUCCESS = 'TEST_SUCCESS';
const TEST_FAILED = 'TEST_FAILED';

const initialState = {
    passed: false,
    error: false,
    loading: false,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case TEST_SUCCESS:
        return {
            ...state,
            passed: payload.passed,
            loading: false,
        };
    case TEST_FAILED:
        return {
            ...state,
            error: true,
            loading: false,
        };
    case TEST_PENDING:
        return {
            ...state,
            loading: true,
            error: false,
        };
    default:
        return state;
    }
};

export const installSuccess = createAction(TEST_SUCCESS);
export const installFailed = createAction(TEST_FAILED);

export const install = () => (dispatch) => {
    dispatch({ type: TEST_PENDING });

    setTimeout(() => {
        dispatch(installSuccess({ passed: true }));
    }, 2000);
};
