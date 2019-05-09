import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import * as authApi from '../api/auth-api';
import * as authAction from '../actions/auth-action';
import { SIGN_IN, SIGN_OUT, SIGN_UP } from '../constants/action-types';

function* signInWithCreds(creds) {
  try {
    console.log('auth-saga: signInWithCreds- API', creds);
    const user = yield call(authApi.signIn, creds);
    console.log('auth-saga: signInWithCreds - RES', user);
    localStorage.setItem('fake-token', user.token);
    // yield call(localStorage.setItem('fake-token', user.password));
    /* dispatch action */
    console.log('auth-saga: signInWithCreds - DISPATCH', user);
    yield put(authAction.signInSuccess(user));
  } catch (error) {
    console.log('error: signInWithCreds', error);
  }
}

export function* signIn() {
  yield takeEvery(SIGN_IN, signInWithCreds);
}

export default function* authSaga() {
  yield all([
    fork(signIn)
  ]);
}