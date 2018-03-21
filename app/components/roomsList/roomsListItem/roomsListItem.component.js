import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import TrashIcon from '@atlaskit/icon/glyph/trash';

import { Room, RemoveButton } from './roomsListItem.styles';

export class RoomsListItem extends PureComponent {
  static propTypes = {
    data: PropTypes.instanceOf(Map).isRequired,
    removeRoom: PropTypes.func.isRequired,
  };
  handleRemove = () => {
    const { data, removeRoom } = this.props;
    removeRoom(data.get('id'));
  };
  render() {
    const { data } = this.props;
    return (
      <Room>
        <h5>{data.get('name', '')}: {data.get('id')}</h5>
        <RemoveButton onClick={this.handleRemove} appearance="danger">
          <TrashIcon primaryColor="inherit" size="small" />
        </RemoveButton>
      </Room>
    );
  }
}
