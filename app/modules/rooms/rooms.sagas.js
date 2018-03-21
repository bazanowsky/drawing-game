import { put, takeLatest } from 'redux-saga/effects';
import reportError from 'report-error';

import { RoomsTypes, RoomsActions } from './rooms.redux';


export function* watchRooms() {
  try {
    console.log('Rooms saga started!');
  } catch(error) {
    /* istanbul ignore next */
    reportError(error);
  }
}
