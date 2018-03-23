import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';

import {
  Container,
} from './roomsList.styles';
import { RoomsListItem } from './roomsListItem/roomsListItem.component';

export class RoomsList extends PureComponent {
  static propTypes = {
    rooms: PropTypes.instanceOf(List).isRequired,
    removeRoom: PropTypes.func.isRequired,
    startWatchRooms: PropTypes.func.isRequired,
    stopWatchRooms: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.startWatchRooms();
  }

  componentWillUnmount() {
    this.props.stopWatchRooms();
  }

  render() {
    const { rooms, removeRoom } = this.props;

    return (
      <Container>
        {rooms.map((room) => {
          return (
            <RoomsListItem key={room.get('id')} data={room} removeRoom={removeRoom} />
          );
        }).toArray()}
      </Container>
    );
  }
}

