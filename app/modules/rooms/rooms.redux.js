import { createActions, createReducer } from 'reduxsauce';
import { Record, List, fromJS } from 'immutable';
import { pick } from 'ramda';

export const { Types: RoomsTypes, Creators: RoomsActions } = createActions({
  startWatch: null,
  stopWatch: null,
  fetch: null,
  create: null,
  add: ['data'],
  remove: ['id'],
}, { prefix: 'ROOMS_' });

const RoomsRecord = new Record({
  rooms: List(),
});


export const INITIAL_STATE = new RoomsRecord({});

export const addRoom = (state, { data }) => (
  state.update('rooms', rooms => {
    return rooms.push(fromJS(pick(['id', 'owner'], data)));
  })
);

export const removeRoom = (state, { id }) => (
  state.update('rooms', rooms => {
    const index = rooms.findIndex((room) => room.get('id') === id);
    return rooms.delete(index);
  })
);

export const reducer = createReducer(INITIAL_STATE, {
  [RoomsTypes.ADD]: addRoom,
  [RoomsTypes.REMOVE]: removeRoom,
});
