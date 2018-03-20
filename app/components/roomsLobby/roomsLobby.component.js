import React, { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';

import { RoomsList } from '../roomsList/roomsList.component';
import messages from './roomsLobby.messages';
import {
  Container, ControlBar, Status, CreateRoomButton, RoomsWrapper,
} from './roomsLobby.styles';
import { PullRight } from '../../theme/index';

export class RoomsLobby extends PureComponent {
  render() {
    return (
      <Container>
        <ControlBar>
          <Status>
            <FormattedMessage
              {...messages.status}
              values={{
                roomsCount: 5,
              }}
            />
          </Status>
          <PullRight>
            <CreateRoomButton appearance="danger">
              <FormattedMessage {...messages.createRoomButton} />
            </CreateRoomButton>
          </PullRight>
        </ControlBar>
        <RoomsWrapper>
          <RoomsList count={15} />
        </RoomsWrapper>
      </Container>
    );
  }
}
