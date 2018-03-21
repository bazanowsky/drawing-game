import { createActions, createReducer } from 'reduxsauce';
import { Record, List, fromJS } from 'immutable';
import { inc } from 'ramda';

export const { Types: RoomsTypes, Creators: RoomsActions } = createActions({
  addRoom: ['data'],
  removeRoom: ['id'],
}, { prefix: 'ROOMS_' });

const RoomsRecord = new Record({
  rooms: List(),
});


export const INITIAL_STATE = new RoomsRecord({});

export const addRoom = (state, { data }) => (
  state.update('rooms', rooms => {
    const maxRoom = rooms.maxBy(room => room.get('id'));
    const id = maxRoom ? inc(maxRoom.get('id'), 1) : 1;
    return rooms.push(fromJS({ id, ...data }));
  })
);

export const removeRoom = (state, { id }) => (
  state.update('rooms', rooms => {
    const index = rooms.findIndex((room) => room.get('id') === id);
    return rooms.delete(index);
  })
);

export const reducer = createReducer(INITIAL_STATE, {
  [RoomsTypes.ADD_ROOM]: addRoom,
  [RoomsTypes.REMOVE_ROOM]: removeRoom,
});
