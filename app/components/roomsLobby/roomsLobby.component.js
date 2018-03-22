import React, { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { List } from 'immutable';

import { RoomsList } from '../roomsList/roomsList.component';
import messages from './roomsLobby.messages';
import {
  Container, ControlBar, Status, CreateRoomButton, RoomsWrapper,
} from './roomsLobby.styles';
import { PullRight } from '../../theme/index';

export class RoomsLobby extends PureComponent {
  static propTypes = {
    createRoom: PropTypes.func.isRequired,
    removeRoom: PropTypes.func.isRequired,
    rooms: PropTypes.instanceOf(List).isRequired,
  };

  handleCreateRoom = () => {
    this.props.createRoom();
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
          <RoomsList rooms={rooms} removeRoom={removeRoom} />
        </RoomsWrapper>
      </Container>
    );
  }
}
