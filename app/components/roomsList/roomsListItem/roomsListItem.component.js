import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';

import { Room, RemoveButton } from './roomsListItem.styles';

export class RoomsListItem extends PureComponent {
  static propTypes = {
    data: PropTypes.instanceOf(Map).isRequired,
  };

  render() {
    const { data } = this.props;
    return (
      <Room>
        <h5>{data.get('name', '')}: {data.get('id')}</h5>
        <RemoveButton appearance="danger">remove</RemoveButton>
      </Room>
    );
  }
}
