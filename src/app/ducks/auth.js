export const AUTH_SIGNIN = 'auth/signin';
export const AUTH_SIGNIN_SUCCESS = 'auth/signin.success';
export const AUTH_SIGNIN_FAILED = 'auth/signin.failed';

const initialState = {
	authenticated: false,
	user: null,
	error: false,
};

export default function authReducer(state = initialState, action) {
	switch (action.type) {
	case AUTH_SIGNIN_SUCCESS:
		return {
			...state,
			authenticated: true,
			user: action.payload,
			error: false,
		};
	case AUTH_SIGNIN_FAILED:
		return {
			...state,
			authenticated: false,
			user: null,
			error: true,
		};
	default:
		return state;
	}
}

export function signIn() {
	return { type: AUTH_SIGNIN };
}

export function signInSuccess(user) {
	return { type: AUTH_SIGNIN_SUCCESS, payload: user };
}

export function signInFailed(error) {
	return { type: AUTH_SIGNIN_FAILED, payload: error, error: true };
}
