export const TEST = 'installation/test';
export const TEST_SUCCESS = 'installation/test.success';
export const TEST_FAILED = 'installation/test.failed';

const initialState = {
	test_passed: false,
	error: false,
};

export default function authReducer(state = initialState, action) {
	switch (action.type) {
	case TEST_SUCCESS:
		return {
			...state,
			test_passed: true,
			error: false,
		};
	case TEST_FAILED:
		return {
			...state,
			test_passed: false,
			error: true,
		};
	default:
		return state;
	}
}

export function testInstallation() {
	return { type: TEST };
}

export function testInstallationSuccess() {
	return { type: TEST_SUCCESS };
}

export function testInstallationFailed(error) {
	return { type: TEST_FAILED, payload: error, error: true };
}
