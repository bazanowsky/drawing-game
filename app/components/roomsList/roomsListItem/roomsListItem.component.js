import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Map } from 'immutable';
import TrashIcon from '@atlaskit/icon/glyph/trash';

import {
  Room, RemoveButton, Meta, Owner, RoomId,
} from './roomsListItem.styles';
import messages from './roomsListItem.messages';

export class RoomsListItem extends PureComponent {
  static propTypes = {
    data: PropTypes.instanceOf(Map).isRequired,
    removeRoom: PropTypes.func.isRequired,
  };
  handleRemove = () => {
    const { data, removeRoom } = this.props;
    removeRoom(data.get('uid'));
  };
  render() {
    const { data } = this.props;
    return (
      <Room>
        <Meta>
          <RoomId>
            <FormattedMessage
              {...messages.roomId}
              values={{
                id: data.get('id', ''),
              }}
            />
          </RoomId>
          <Owner>
            <FormattedMessage
              {...messages.owner}
              values={{
                owner: data.get('owner', ''),
              }}
            />
          </Owner>
        </Meta>
        <RemoveButton onClick={this.handleRemove} appearance="danger">
          <TrashIcon primaryColor="inherit" size="small" />
        </RemoveButton>
      </Room>
    );
  }
}
