import React, { PureComponent } from 'react';
import { range } from 'ramda';
import {
  Container,
} from './roomsList.styles';
import { RoomsListItem } from './roomsListItem/roomsListItem.component';

export class RoomsList extends PureComponent {
  render() {
    const { count } = this.props;

    return (
      <Container>
        {range(0, count).map((item, index) => (
          <RoomsListItem key={index}>{index + 1}</RoomsListItem>
        ))}
      </Container>
    );
  }
}
