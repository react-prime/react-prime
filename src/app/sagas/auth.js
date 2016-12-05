import { takeEvery } from 'redux-saga';
import { fork, put } from 'redux-saga/effects';
import { signInSuccess, signInFailed, AUTH_SIGNIN } from 'app/ducks/auth';
import 'babel-polyfill';

function* signIn() {
	try {
		yield put(signInSuccess('name'));
	} catch (error) {
		yield put(signInFailed(error));
	}
}

// WATCHERS
function* watchSignIn() {
	yield* takeEvery(AUTH_SIGNIN, signIn);
}

export const authSagas = [
	fork(watchSignIn),
];
