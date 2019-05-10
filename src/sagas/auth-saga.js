import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import * as authApi from '../api/auth-api';
import * as authAction from '../actions/auth-action';
import { SIGN_IN, SIGN_OUT, SIGN_UP } from '../constants/action-types';
import { setAuthToken } from '../utils/local-storage';

function* signInWithCreds(creds) {
  try {
    console.log('auth-saga: signInWithCreds- API', creds.data);
    const user = yield call(authApi.signIn, creds.data);
    console.log('auth-saga: signInWithCreds - RES', user);
    yield call(setAuthToken, user.id);
    /* dispatch action */
    console.log('auth-saga: signInWithCreds - DISPATCH', user);
    yield put(authAction.signInSuccess(user));
  } catch (error) {
    console.log('error: signInWithCreds', error);
  }
}

export function* signInSaga() {
  yield takeEvery(SIGN_IN, signInWithCreds);
}

export default function* authSaga() {
  yield all([
    fork(signInSaga)
  ]);
}