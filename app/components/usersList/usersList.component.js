import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';

import {
  Container,
} from './usersList.styles';
import { UsersListItem } from './usersListItem/usersListItem.component';

export class UsersList extends PureComponent {
  static propTypes = {
    users: PropTypes.instanceOf(List).isRequired,
  };

  render() {
    const { users } = this.props;

    return (
      <Container>
        {users.map((user) => {
          return (
            <UsersListItem key={user.get('uid')} data={user} />
          );
        }).toArray()}
      </Container>
    );
  }
}

