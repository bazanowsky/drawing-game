import { all, fork } from 'redux-saga/effects';
import { watchAuth } from './auth/auth.sagas';
import { watchRooms } from './rooms/rooms.sagas';
//<-- IMPORT MODULE SAGA -->

export default function* rootSaga() {
  yield all([
    fork(watchAuth),
    fork(watchRooms),
    //<-- INJECT MODULE SAGA -->
  ]);
}
