import { put, takeLatest } from 'redux-saga/effects';
import reportError from 'report-error';

import { AuthTypes } from '../auth/auth.redux';
import { UsersTypes, UsersActions } from './users.redux';
import { Database } from '../../services/firebase';

const usersRef = Database.ref('users');

export function* updateUser({ data }) {
  try {
    yield usersRef.child(data.uid).update(data);
  } catch (error) {
    /* istanbul ignore next */
    reportError(error);
  }
}

export const prepareUsers = (users) => {
  if (!users) {
    return [];
  }

  return Object.entries(users).map(([uid, user]) => ({
    uid,
    ...user,
  }));
};

export function* fetchUsers() {
  try {
    const users = yield usersRef.once('value').then(snapshot => snapshot.val());
    const preparedUsers = prepareUsers(users);
    yield put(UsersActions.setUsers(preparedUsers));
  } catch (error) {
    /* istanbul ignore next */
    reportError(error);
  }
}

export function* watchUsers() {
  try {
    yield takeLatest(AuthTypes.UPDATE_USER, updateUser);
    yield takeLatest(UsersTypes.FETCH_USERS, fetchUsers);
    console.log('Users saga started!');
  } catch (error) {
    /* istanbul ignore next */
    reportError(error);
  }
}
