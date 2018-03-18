import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Map } from 'immutable';

import { AppBar } from '../../components/appBar/appBar.component';

import { Wrapper, Logo, Title, Image } from './home.styles';
import { Screen, Container } from '../../theme';
import messages from './home.messages';

export class Home extends PureComponent {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    user: PropTypes.instanceOf(Map).isRequired,
    logout: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  render() {
    const { user, isLoggedIn } = this.props;

    if (!isLoggedIn) {
      return <Redirect to="/login" />;
    }

    return (
      <Screen>
        <AppBar
          logout={this.props.logout}
          title={messages.title}
          user={user}
        />
        <Container>
          <Wrapper>
            <Logo name="logo" />
            <Title>Home</Title>
          </Wrapper>
        </Container>
      </Screen>
    );
  }
}
