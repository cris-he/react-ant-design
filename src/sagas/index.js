import { all } from 'redux-saga/effects';
import authSaga from './auth-saga'
import settingSaga from './setting-saga'

export default function* rootSaga(getState) {
    yield all([
        authSaga(),
        settingSaga()
    ]);
}