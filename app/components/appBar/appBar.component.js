import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Map } from 'immutable';

import {
  Header, Title, Avatar, UserName, LogoutButton, Nav, NavButton,
} from './appBar.styles';
import { PullRight } from '../../theme/index';
import messages from './appBar.messages';

export class AppBar extends PureComponent {
  static propTypes = {
    title: PropTypes.object.isRequired,
    user: PropTypes.instanceOf(Map).isRequired,
    logout: PropTypes.func.isRequired,
  };

  handleLogout = () => {
    this.props.logout();
  };

  render() {
    const { user, title } = this.props;
    return (
      <Header>
        <Title>
          <FormattedMessage {...title} />
        </Title>

        <Nav>
          <NavButton to="/about">
            <FormattedMessage {...messages.about} />
          </NavButton>
          <NavButton to="/contact">
            <FormattedMessage {...messages.contact} />
          </NavButton>
        </Nav>

        <PullRight>
          <Avatar src={user.get('avatar')} />
          <UserName>{user.get('name')}</UserName>

          <LogoutButton appearance="primary" onClick={this.handleLogout}>
            <FormattedMessage {...messages.logout} />
          </LogoutButton>

        </PullRight>
      </Header>
    );
  }
}
