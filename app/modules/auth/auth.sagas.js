import { put, takeLatest, call, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import reportError from 'report-error';
import { cond, equals, always, T } from 'ramda';

import { AuthTypes, AuthActions } from './auth.redux';
import { StartupTypes } from '../startup/';

import Firebase, { Auth, Database } from '../../services/firebase';
import { AUTH_PROVIDER_GOOGLE, AUTH_PROVIDER_FACEBOOK } from './auth.constants';

const userRef = null;

export function* requestLogin({ providerType }) {
  try {
    const provider = cond([
      [equals(AUTH_PROVIDER_GOOGLE), always(new Firebase.auth.GoogleAuthProvider())],
      [equals(AUTH_PROVIDER_FACEBOOK), always(new Firebase.auth.FacebookAuthProvider())],
      [T, always(null)],
    ])(providerType);

    Auth.signInWithPopup(provider);
  } catch (error) {
    /* istanbul ignore next */
    reportError(error);
  }
}

const AuthStateListener = () => {
  return eventChannel(emitter => {
    Auth.onAuthStateChanged((user) => {
      if (user) {
        const userData = {
          name: user.displayName,
          email: user.email,
          avatar: user.photoURL,
          uid: user.uid,
          provider: user.providerData[0].providerId,
          pid: user.providerData[0].uid,
          online: true,
        };
        emitter(userData);
      } else {
        emitter(false);
      }
    });

    return () => {
      console.log('event channel closed');
    };
  });
};

export function* watchAuthState() {
  try {
    const channel = yield call(AuthStateListener);

    while (true) {
      const userData = yield take(channel);
      if (userData) {
        yield put(AuthActions.updateUser(userData));
      } else {
        yield put(AuthActions.clearUser());
      }
    }
  } catch (error) {
    /* istanbul ignore next */
    reportError(error);
  }
}

export function* logout() {
  try {
    yield Auth.signOut();
  } catch (error) {
    /* istanbul ignore next */
    reportError(error);
  }
}

export function* watchOnline() {
  try {
    console.log('test');
  } catch (error) {
    /* istanbul ignore next */
    reportError(error);
  }
}

export function* watchAuth() {
  try {
    yield takeLatest(StartupTypes.STARTUP, watchAuthState);
    yield takeLatest(AuthTypes.REQUEST_LOGIN, requestLogin);
    yield takeLatest(AuthTypes.LOGOUT, logout);
    yield takeLatest(AuthTypes.WATCH_ONLINE, watchOnline);
  } catch (error) {
    /* istanbul ignore next */
    reportError(error);
  }
}
