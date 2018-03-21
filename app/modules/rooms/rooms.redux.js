import { createActions, createReducer } from 'reduxsauce';
import { Record, List, fromJS } from 'immutable';

export const { Types: RoomsTypes, Creators: RoomsActions } = createActions({
  addRoom: ['data'],
}, { prefix: 'ROOMS_' });

const RoomsRecord = new Record({
  rooms: List(),
});


export const INITIAL_STATE = new RoomsRecord({});

export const addRoom = (state, { data }) => (
  state.update('rooms', rooms => (
    rooms.push(fromJS({ id: rooms.size + 1, ...data })))
  )
);

export const reducer = createReducer(INITIAL_STATE, {
  [RoomsTypes.ADD_ROOM]: addRoom,
});
