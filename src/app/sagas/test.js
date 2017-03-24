import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { testInstallationSuccess, testInstallationFailed, TEST } from 'app/ducks/test';
import 'babel-polyfill';

function* testInstallation() {
    try {
        yield put(testInstallationSuccess());
    } catch (error) {
        yield put(testInstallationFailed(error));
    }
}

export default function *rootSaga() {
    yield [
        call(takeLatest, TEST, testInstallation),
    ];
}
