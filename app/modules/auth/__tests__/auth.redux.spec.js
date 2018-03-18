import { expect } from 'chai';
import { fromJS } from 'immutable';

import {
  reducer as authReducer,
  AuthActions,
  AuthTypes,
} from '../auth.redux';


describe('Auth: redux', () => {
  const state = fromJS({
  });

  describe('reducer', () => {
    it('should return initial state', () => {
      expect(authReducer(undefined, {}).toJS()).to.deep.equal(state.toJS());
    });

    it('should return state on unknown action', () => {
      expect(authReducer(state, { type: 'unknown-action' }).toJS()).to.deep.equal(state.toJS());
    });
  });
});
