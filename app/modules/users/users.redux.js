import { createActions, createReducer } from 'reduxsauce';
import { Record, List, fromJS } from 'immutable';

export const { Types: UsersTypes, Creators: UsersActions } = createActions({
  updateUser: ['userData'],
  fetchUsers: null,
  fetchUsersSuccess: ['users'],
  setUsers: ['users'],
}, { prefix: 'USERS_' });

const UsersRecord = new Record({
  users: List(),
});

export const INITIAL_STATE = new UsersRecord({});

export const setUsers = (state, { users }) => state.set('users', fromJS(users));

export const reducer = createReducer(INITIAL_STATE, {
  [UsersTypes.SET_USERS]: setUsers,
});
