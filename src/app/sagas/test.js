import { takeEvery } from 'redux-saga';
import { fork, put } from 'redux-saga/effects';
import { testInstallationSuccess, testInstallationFailed, TEST } from 'app/ducks/test';
import 'babel-polyfill';

function* testInstallation() {
    try {
        yield put(testInstallationSuccess());
    } catch (error) {
        yield put(testInstallationFailed(error));
    }
}

// WATCHERS
function* watchSignIn() {
    yield* takeEvery(TEST, testInstallation);
}

export const testSagas = [
    fork(watchSignIn),
];
