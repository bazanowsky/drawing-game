import { put, call, takeLatest, take, fork, takeEvery, select } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import reportError from 'report-error';

import { RoomsTypes, RoomsActions } from './rooms.redux';
import { Database, returnValue } from '../../services/firebase';
import { selectUser } from '../auth/auth.selectors';
import { ROOM_ADDED, ROOM_REMOVED } from './rooms.constants';

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

export function* removeRoom({ uid }) {
  try {
    yield roomsRef.child(uid).remove();
  } catch (error) {
    /* istanbul ignore next */
    reportError(error);
  }
}

const roomsListener = () => {
  return eventChannel(emitter => {
    roomsRef.on('child_added', (snapshot) => {
      const room = {
        uid: snapshot.key,
        ...snapshot.val(),
      };

      const action = {
        action: ROOM_ADDED,
        room,
      };
      emitter(action);
    });

    roomsRef.on('child_removed', (snapshot) => {
      const room = {
        uid: snapshot.key,
      };

      const action = {
        action: ROOM_REMOVED,
        room,
      };

      emitter(action);
    });

    return () => {
      roomsRef.off('child_added');
      roomsRef.off('child_removed');
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

    const channel = yield call(roomsListener);
    yield fork(stopWatchRooms, channel);

    while (true) {
      const event = yield take(channel);

      if (event.action === ROOM_ADDED) {
        if (!rooms.find(current => event.room.uid === current.uid)) {
          yield put(RoomsActions.add(event.room));
        }
      }

      if (event.action === ROOM_REMOVED) {
        yield put(RoomsActions.remove(event.room.uid));
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
    yield takeLatest(RoomsTypes.REQUEST_REMOVE, removeRoom);
    yield takeEvery(RoomsTypes.CREATE, createRoom);
    yield takeLatest(RoomsTypes.START_WATCH, startWatchRooms);
  } catch (error) {
    /* istanbul ignore next */
    reportError(error);
  }
}
