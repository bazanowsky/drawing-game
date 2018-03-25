import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';

import {
  User, Avatar, Name,
} from './usersListItem.styles';

export class UsersListItem extends PureComponent {
  static propTypes = {
    data: PropTypes.instanceOf(Map).isRequired,
  };

  render() {
    const { data } = this.props;
    return (
      <User>
        <Avatar src={data.get('avatar')} />
        <Name>{data.get('name')}</Name>
      </User>
    );
  }
}
