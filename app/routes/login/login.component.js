import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { Redirect } from 'react-router-dom';

import messages from './login.messages';
import { Wrapper, Logo, Title, Hint, ButtonsGroup, Button } from './login.styles';
import { Screen, Container } from '../../theme';

import { AUTH_PROVIDER_FACEBOOK, AUTH_PROVIDER_GOOGLE } from '../../modules/auth/auth.constants';

export class Login extends PureComponent {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    login: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  handleLogin = (type) => {
    this.props.login(type);
  };

  render() {
    if (this.props.isLoggedIn) {
      return <Redirect to="/" />;
    }

    return (
      <Screen>
        <Container>
          <Wrapper>
            <Logo name="logo" />
            <Title>
              <FormattedHTMLMessage {...messages.welcome} />
            </Title>

            <Hint>
              <FormattedMessage {...messages.login} />
            </Hint>

            <ButtonsGroup>
              <Button
                appearance="primary"
                onClick={() => this.handleLogin(AUTH_PROVIDER_FACEBOOK)}
              >
                <FormattedMessage {...messages.facebook} />
              </Button>
              <Button
                appearance="danger"
                onClick={() => this.handleLogin(AUTH_PROVIDER_GOOGLE)}
              >
                <FormattedMessage {...messages.google} />
              </Button>
            </ButtonsGroup>
          </Wrapper>
        </Container>
      </Screen>
    );
  }
}
