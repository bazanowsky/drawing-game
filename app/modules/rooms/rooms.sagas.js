import { put, call, takeLatest, take, fork, takeEvery, select } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import reportError from 'report-error';

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
      const room = {
        uid: snapshot.key,
        ...snapshot.val(),
      };

      if (room) {
        emitter(room);
      } else {
        emitter(false);
      }
    });

    return () => {
      roomsRef.off('child_added');
    };
  });
};

export const prepareRooms = (rooms) => {
  if (!rooms) {
    return [];
  }

  return Object.entries(rooms).map(([uid, room]) => ({
    uid,
    ...room,
  }));
};

export function* fetchRooms() {
  try {
    const rooms = yield roomsRef.once('value').then(snapshot => snapshot.val());
    const preparedRooms = prepareRooms(rooms);
    yield put(RoomsActions.fetchSuccess(preparedRooms));
  } catch (error) {
    /* istanbul ignore next */
    reportError(error);
  }
}

export function* startWatchRooms() {
  try {
    yield put(RoomsActions.fetch());
    const { rooms } = yield take(RoomsTypes.FETCH_SUCCESS);
    yield put(RoomsActions.set(rooms));

    const channel = yield call(roomAddedListener);
    yield fork(stopWatchRooms, channel);

    while (true) {
      const newRoom = yield take(channel);

      if (newRoom && !rooms.find(current => newRoom.uid === current.uid)) {
        yield put(RoomsActions.add(newRoom));
      }
    }
  } catch (error) {
    /* istanbul ignore next */
    reportError(error);
  }
}

export function* stopWatchRooms(channel) {
  try {
    yield take(RoomsTypes.STOP_WATCH);
    channel.close();
  } catch (error) {
    /* istanbul ignore next */
    reportError(error);
  }
}

export function* watchRooms() {
  try {
    yield takeLatest(RoomsTypes.FETCH, fetchRooms);
    yield takeEvery(RoomsTypes.CREATE, createRoom);
    yield takeLatest(RoomsTypes.START_WATCH, startWatchRooms);
  } catch (error) {
    /* istanbul ignore next */
    reportError(error);
  }
}
