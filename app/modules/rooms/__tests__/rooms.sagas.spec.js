import SagaTester from 'redux-saga-tester';
import { expect } from 'chai';
import { fromJS } from 'immutable';

import mockApi from '../../../utils/mockApi';
import { watchRooms } from '../rooms.sagas';
import {
  RoomsActions,
  RoomsTypes
} from '../rooms.redux';

describe('Rooms: sagas', () => {
  const defaultState = fromJS({});

  const getSagaTester = (initialState = {}) => {
    const sagaTester = new SagaTester({
      initialState: defaultState.mergeDeep(initialState),
    });
    sagaTester.start(watchRooms);
    return sagaTester;
  };

  it('should implement a test', () => {
    const sagaTester = getSagaTester();

    sagaTester.dispatch(RoomsActions.noop());

    expect(sagaTester.getCalledActions()).to.deep.equal([RoomsActions.noop()]);
  });
});
