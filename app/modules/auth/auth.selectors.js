import { createSelector } from 'reselect';

export const selectAuthDomain = state => state.get('auth');

export const selectIsLoggedIn = createSelector(
  selectAuthDomain, state => state.get('user').size !== 0
);

export const selectUser = createSelector(
  selectAuthDomain, state => state.get('user'),
);
