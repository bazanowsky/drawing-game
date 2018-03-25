import { createActions, createReducer } from 'reduxsauce';
import { Record, List, fromJS } from 'immutable';
import { pick } from 'ramda';

export const { Types: RoomsTypes, Creators: RoomsActions } = createActions({
  startWatch: null,
  stopWatch: null,
  fetch: null,
  fetchSuccess: ['rooms'],
  create: null,
  set: ['rooms'],
  add: ['room'],
  remove: ['uid'],
  requestRemove: ['uid'],
}, { prefix: 'ROOMS_' });

const RoomsRecord = new Record({
  rooms: List(),
});


export const INITIAL_STATE = new RoomsRecord({});

export const setRooms = (state, { rooms }) => {
  return state.set('rooms', fromJS(rooms));
};

export const addRoom = (state, { room }) => (
  state.update('rooms', rooms => {
    return rooms.push(fromJS(room));
  })
);

export const removeRoom = (state, { uid }) => (
  state.update('rooms', rooms => {
    const index = rooms.findIndex((room) => room.get('uid') === uid);
    return rooms.delete(index);
  })
);

export const reducer = createReducer(INITIAL_STATE, {
  [RoomsTypes.SET]: setRooms,
  [RoomsTypes.ADD]: addRoom,
  [RoomsTypes.REMOVE]: removeRoom,
});
