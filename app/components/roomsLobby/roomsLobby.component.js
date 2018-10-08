import React, { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { List } from 'immutable';

import { RoomsList } from '../roomsList/roomsList.component';
import messages from './roomsLobby.messages';
import {
  Container, ControlBar, Status, CreateRoomButton, RoomsWrapper,
  Loading, LoadingBackground, Spinner,
} from './roomsLobby.styles';
import { PullRight } from '../../theme/index';

export class RoomsLobby extends PureComponent {
  static propTypes = {
    rooms: PropTypes.instanceOf(List).isRequired,
    loading: PropTypes.bool.isRequired,
    createRoom: PropTypes.func.isRequired,
    removeRoom: PropTypes.func.isRequired,
  };

  static defaultProps = {
    loading: false,
  };

  handleCreateRoom = () => {
    this.props.createRoom();
  };

  renderLoading = () => {
    const { loading } = this.props;
    console.log(loading);
    return (
      <Loading>
        <LoadingBackground />
        <Spinner
          size={40}
          spinnerColor={'#333'}
          spinnerWidth={3}
          visible={true}
        />
      </Loading>
    );
  };

  render() {
    const { rooms, removeRoom } = this.props;
    return (
      <Container>
        <ControlBar>
          <Status>
            <FormattedMessage
              {...messages.status}
              values={{
                roomsCount: rooms.size,
              }}
            />
          </Status>
          <PullRight>
            <CreateRoomButton appearance="danger" onClick={this.handleCreateRoom}>
              <FormattedMessage {...messages.createRoomButton} />
            </CreateRoomButton>
          </PullRight>
        </ControlBar>
        <RoomsWrapper>
          {this.renderLoading()}
          <RoomsList
            rooms={rooms}
            removeRoom={removeRoom}
          />
        </RoomsWrapper>
      </Container>
    );
  }
}
