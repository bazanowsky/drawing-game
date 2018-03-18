import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import Button from '@atlaskit/button';

import messages from './home.messages';
import { Wrapper, Logo, Title, Image } from './home.styles';
import { Screen } from '../../theme';

export class Home extends PureComponent {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  handleLogout = () => {
    this.props.logout();
  };

  render() {
    const { user, isLoggedIn } = this.props;

    if (!isLoggedIn) {
      return <Redirect to="/login" />;
    }

    return (
      <Screen>
        <Wrapper>
          <Logo name="logo" />
          <Title>Home</Title>

          <Image src={user.get('avatar')} />
          <h4>{user.get('name')}</h4>
          <h5>{user.get('email')}</h5>

          <br />

          <Button appearance="warning" onClick={this.handleLogout}>Logout</Button>
        </Wrapper>
      </Screen>
    );
  }
}
