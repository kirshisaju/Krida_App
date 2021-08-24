/*
 * Reducer actions related with login
 */
import * as types from './types';
import { ILoginResponse } from 'app/models/api/login';

export function clubcreate() {
  return {
    type: types.CLUB_CREATE,
  };
}

export function enableLoader(): any {
  throw new Error('Function not implemented.');
}

export function disableLoader(): any {
  throw new Error('Function not implemented.');
}

