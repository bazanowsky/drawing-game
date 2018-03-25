import { expect } from 'chai';
import { fromJS } from 'immutable';

import {
  reducer as usersReducer,
  UsersActions,
  UsersTypes,
} from '../users.redux';


describe('Users: redux', () => {
  const state = fromJS({
  });

  describe('reducer', () => {
    it('should return initial state', () => {
      expect(usersReducer(undefined, {}).toJS()).to.deep.equal(state.toJS());
    });

    it('should return state on unknown action', () => {
      expect(usersReducer(state, { type: 'unknown-action' }).toJS()).to.deep.equal(state.toJS());
    });
  });
});
