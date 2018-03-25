import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Map, List } from 'immutable';

import { AppBar } from '../../components/appBar/appBar.component';
import { RoomsLobby } from '../../components/roomsLobby/roomsLobby.component';
import { UsersLobby } from '../../components/usersLobby/usersLobby.component';

import { Wrapper, RoomsListContainer, Sidebar } from './home.styles';
import { Screen, Container } from '../../theme';
import messages from './home.messages';

export class Home extends PureComponent {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    user: PropTypes.instanceOf(Map).isRequired,
    logout: PropTypes.func.isRequired,
    rooms: PropTypes.instanceOf(List).isRequired,
    createRoom: PropTypes.func.isRequired,
    removeRoom: PropTypes.func.isRequired,
    startWatchRooms: PropTypes.func.isRequired,
    stopWatchRooms: PropTypes.func.isRequired,
    fetchUsers: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { user, isLoggedIn, users, rooms, createRoom, removeRoom, startWatchRooms, stopWatchRooms } = this.props;

    if (!isLoggedIn) {
      return <Redirect to="/login" />;
    }

    return (
      <Screen>
        <AppBar
          logout={this.props.logout}
          title={messages.title}
          user={user}
        />
        <Container>
          <Wrapper>
            <RoomsListContainer>
              <RoomsLobby
                rooms={rooms}
                createRoom={createRoom}
                removeRoom={removeRoom}
                startWatchRooms={startWatchRooms}
                stopWatchRooms={stopWatchRooms}
              />
            </RoomsListContainer>
            <Sidebar>
              <UsersLobby users={users} />
            </Sidebar>
          </Wrapper>
        </Container>
      </Screen>
    );
  }
}
