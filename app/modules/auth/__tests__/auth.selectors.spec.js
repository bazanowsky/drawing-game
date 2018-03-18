import { expect } from 'chai';
import { fromJS } from 'immutable';

import { selectAuthDomain } from '../auth.selectors';

describe('Auth: selectors', () => {
  const state = fromJS({
    auth: {

    },
  });

  describe('selectAuthDomain', () => {
    it('should select a domain', () => {
      expect(selectAuthDomain(state)).to.equal(state.get('auth'));
    });
  });
});
