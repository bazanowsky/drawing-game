import React, { PureComponent } from 'react';
import { range } from 'ramda';
import {
  Container, Room,
} from './roomsList.styles';

export class RoomsList extends PureComponent {
  render() {
    const { count } = this.props;

    return (
      <Container>
        {range(0, count).map((item, index) => (
          <Room key={index}>{index + 1}</Room>
        ))}
      </Container>
    );
  }
}
