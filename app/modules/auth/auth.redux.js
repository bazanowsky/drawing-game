import { createActions, createReducer } from 'reduxsauce';
import { Record, fromJS, Map } from 'immutable';

export const { Types: AuthTypes, Creators: AuthActions } = createActions({
  updateUser: ['data'],
  clearUser: null,
}, { prefix: 'AUTH_' });

const AuthRecord = new Record({
  user: Map(),
});

export const INITIAL_STATE = new AuthRecord({});

export const updateUserData = (state, { data }) => state.set('user', fromJS(data));
export const clearUserData = (state) => state.set('user', Map());

export const reducer = createReducer(INITIAL_STATE, {
  [AuthTypes.UPDATE_USER]: updateUserData,
  [AuthTypes.CLEAR_USER]: clearUserData,
});
