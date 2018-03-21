import { expect } from 'chai';
import { fromJS } from 'immutable';

import { selectRoomsDomain } from '../rooms.selectors';

describe('Rooms: selectors', () => {
  const state = fromJS({
    rooms: {

    },
  });

  describe('selectRoomsDomain', () => {
    it('should select a domain', () => {
      expect(selectRoomsDomain(state)).to.equal(state.get('rooms'));
    });
  });
});
