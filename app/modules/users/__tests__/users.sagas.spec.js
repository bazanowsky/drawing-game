import SagaTester from 'redux-saga-tester';
import { expect } from 'chai';
import { fromJS } from 'immutable';

import mockApi from '../../../utils/mockApi';
import { watchUsers } from '../users.sagas';
import {
  UsersActions,
  UsersTypes
} from '../users.redux';

describe('Users: sagas', () => {
  const defaultState = fromJS({});

  const getSagaTester = (initialState = {}) => {
    const sagaTester = new SagaTester({
      initialState: defaultState.mergeDeep(initialState),
    });
    sagaTester.start(watchUsers);
    return sagaTester;
  };

  it('should implement a test', () => {
    const sagaTester = getSagaTester();

    sagaTester.dispatch(UsersActions.noop());

    expect(sagaTester.getCalledActions()).to.deep.equal([UsersActions.noop()]);
  });
});
