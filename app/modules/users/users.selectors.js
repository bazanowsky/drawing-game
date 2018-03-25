import { createSelector } from 'reselect';

export const selectUsersDomain = state => state.get('users');

export const selectUsers = createSelector(
  selectUsersDomain, state => state.get('users')
);
