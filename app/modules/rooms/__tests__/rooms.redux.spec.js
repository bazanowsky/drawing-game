import { expect } from 'chai';
import { fromJS } from 'immutable';

import {
  reducer as roomsReducer,
  RoomsActions,
  RoomsTypes,
} from '../rooms.redux';


describe('Rooms: redux', () => {
  const state = fromJS({
  });

  describe('reducer', () => {
    it('should return initial state', () => {
      expect(roomsReducer(undefined, {}).toJS()).to.deep.equal(state.toJS());
    });

    it('should return state on unknown action', () => {
      expect(roomsReducer(state, { type: 'unknown-action' }).toJS()).to.deep.equal(state.toJS());
    });
  });
});
