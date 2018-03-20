import React, { PureComponent } from 'react';

import { Room } from './roomsListItem.styles';

export class RoomsListItem extends PureComponent {
  render() {
    return (
      <Room>
        {this.props.children}
      </Room>
    );
  }
}
