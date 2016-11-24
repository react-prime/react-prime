import * as c from 'app/constants';

export function signIn() {
	return { type: c.AUTH_SIGNIN };
}

export function signInSuccess(user) {
	return { type: c.AUTH_SIGNIN_SUCCESS, payload: user };
}

export function signInFailed(error) {
	return { type: c.AUTH_SIGNIN_FAILED, payload: error };
}
