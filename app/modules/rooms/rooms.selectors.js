import { createSelector } from 'reselect';

export const selectRoomsDomain = state => state.get('rooms');

export const selectRooms = createSelector(
  selectRoomsDomain, state => state.get('rooms')
);
