import { all, fork } from 'redux-saga/effects';
import { watchAuth } from './auth/auth.sagas';
import { watchRooms } from './rooms/rooms.sagas';
import { watchUsers } from './users/users.sagas';
//<-- IMPORT MODULE SAGA -->

export default function* rootSaga() {
  yield all([
    fork(watchAuth),
    fork(watchRooms),
    fork(watchUsers),
    //<-- INJECT MODULE SAGA -->
  ]);
}
