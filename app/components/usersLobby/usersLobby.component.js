import React, { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { List } from 'immutable';

import { UsersList } from '../usersList/usersList.component';
import messages from './usersLobby.messages';
import {
  Container, ControlBar, Status, RoomsWrapper,
} from './usersLobby.styles';

export class UsersLobby extends PureComponent {
  static propTypes = {
    users: PropTypes.instanceOf(List).isRequired,
  };

  render() {
    const { users } = this.props;
    return (
      <Container>
        <ControlBar>
          <Status>
            <FormattedMessage
              {...messages.status}
              values={{
                usersCount: users.size,
              }}
            />
          </Status>
        </ControlBar>
        <RoomsWrapper>
          <UsersList users={users} />
        </RoomsWrapper>
      </Container>
    );
  }
}
