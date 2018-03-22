import { put, call, takeLatest, take, takeEvery, select } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import reportError from 'report-error';
import { defaultTo } from 'ramda';

import { RoomsTypes, RoomsActions } from './rooms.redux';
import { Database, returnValue } from '../../services/firebase';
import { selectUser } from '../auth/auth.selectors';

const roomsRef = Database.ref('rooms');
const counterRef = Database.ref('counters/rooms');

export function* createRoom() {
  try {
    const user = yield select(selectUser);

    const roomsCount = yield counterRef.transaction((count) => {
      if (count === null) {
        return count;
      }

      return count + 1;
    }).then(returnValue);

    yield roomsRef.push({
      id: roomsCount,
      owner: user.get('email'),
    });
  } catch (error) {
    /* istanbul ignore next */
    reportError(error);
  }
}


const roomAddedListener = () => {
  return eventChannel(emitter => {
    roomsRef.on('child_added', (snapshot) => {
      const room = snapshot.val();

      if (room) {
        emitter(room);
      } else {
        emitter(false);
      }
    });

    return () => {
      console.log('event channel closed');
    };
  });
};


export function* startWatchRooms() {
  try {
    const channel = yield call(roomAddedListener);

    while (true) {
      const room = yield take(channel);

      if (room) {
        yield put(RoomsActions.add(room));
      }
    }
  } catch (error) {
    /* istanbul ignore next */
    reportError(error);
  }
}

export function* watchRooms() {
  try {
    yield takeEvery(RoomsTypes.CREATE, createRoom);
    yield takeLatest(RoomsTypes.START_WATCH, startWatchRooms);
  } catch (error) {
    /* istanbul ignore next */
    reportError(error);
  }
}
