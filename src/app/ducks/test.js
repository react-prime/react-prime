export const TEST_PENDING = 'TEST_PENDING';
export const TEST_SUCCESS = 'TEST_SUCCESS';
export const TEST_FAILED = 'TEST_FAILED';

const initialState = {
    passed: false,
    error: false,
    loading: false,
};

export default function testReducer(state = initialState, action) {
    switch (action.type) {
    case TEST_SUCCESS:
        return {
            ...state,
            passed: true,
            error: false,
            loading: false,
        };
    case TEST_FAILED:
        return {
            ...state,
            passed: false,
            error: true,
            loading: false,
        };
    case TEST_PENDING:
        return {
            ...state,
            loading: true,
        };
    default:
        return state;
    }
}

export function testInstallSuccess() {
    return { type: TEST_SUCCESS };
}

export function testInstallFailed(payload) {
    return { type: TEST_FAILED, payload };
}

export function testInstall() {
    return (dispatch) => {
        dispatch({ type: TEST_PENDING });

        setTimeout(() => {
            dispatch(testInstallSuccess());
        }, 2000);
    };
}
