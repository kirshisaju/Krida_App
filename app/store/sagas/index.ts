/**
 *  Redux saga class init
 */
import { takeEvery, all } from 'redux-saga/effects';
import * as types from '../actions/types';
import loginSaga from './loginSaga';
import clubSaga from './clubSaga';

export default function* watch() {
  yield all([ 
    takeEvery(types.LOGIN_REQUEST, loginSaga),
    //takeEvery(types.CLUB_CREATE, clubSaga),
  ]);
}
