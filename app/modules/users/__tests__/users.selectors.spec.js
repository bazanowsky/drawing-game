import { expect } from 'chai';
import { fromJS } from 'immutable';

import { selectUsersDomain } from '../users.selectors';

describe('Users: selectors', () => {
  const state = fromJS({
    users: {

    },
  });

  describe('selectUsersDomain', () => {
    it('should select a domain', () => {
      expect(selectUsersDomain(state)).to.equal(state.get('users'));
    });
  });
});
