import { put, takeLatest, fork, select } from 'redux-saga/effects';
import reportError from 'report-error';

import { AuthTypes, AuthActions } from './auth.redux';
import { StartupTypes } from '../startup/';
import { selectIsLoggedIn } from './auth.selectors';

export function* watchAuthState() {
  try {
    const user = {
      name: 'asdf',
      lastName: 'sdf',
      email: 'asd@sd.sd',
    };

    yield put(AuthActions.updateUser(user));
  } catch (error) {
    /* istanbul ignore next */
    reportError(error);
  }
}

export function* watchAuth() {
  try {
    yield takeLatest(StartupTypes.STARTUP, watchAuthState);
  } catch (error) {
    /* istanbul ignore next */
    reportError(error);
  }
}
