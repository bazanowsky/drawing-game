import { put, takeLatest, takeEvery, select } from 'redux-saga/effects';
import reportError from 'report-error';
import { defaultTo } from 'ramda';

import { RoomsTypes, RoomsActions } from './rooms.redux';
import { Database, returnValue } from '../../services/firebase';
import { selectUser } from '../auth/auth.selectors';

export function* createRoom() {
  try {
    const user = yield select(selectUser);

    const roomRef = yield Database.ref('rooms').push({
      author: user.get('email'),
    });

    const roomsCountRef = yield Database.ref('counters/rooms');
    const roomsCount = yield roomsCountRef.transaction((count) => {
      if (count === null) {
        return count;
      }

      return count + 1;
    }).then(returnValue);

    yield roomRef.transaction((room) => {
      if (room) {
        room.id = roomsCount;
      }
      return room;
    }).then(returnValue);
  } catch (error) {
    /* istanbul ignore next */
    reportError(error);
  }
}

// export function*

export function* watchRooms() {
  try {
    yield takeEvery(RoomsTypes.CREATE, createRoom);
    // yield takeLatest(RoomsTypes.START_WATCH, startWatchRooms);
  } catch (error) {
    /* istanbul ignore next */
    reportError(error);
  }
}
