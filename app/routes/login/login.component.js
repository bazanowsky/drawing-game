import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

import messages from './login.messages';
import { Wrapper, Logo, Title, Hint, ButtonsGroup, Button } from './login.styles';
import { Screen } from '../../theme';

export class Login extends PureComponent {
  static propTypes = {
    items: PropTypes.object,
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  render() {
    return (
      <Screen>
        <Wrapper>
          <Logo name="logo" />
          <Title>
            <FormattedHTMLMessage {...messages.welcome} />
          </Title>

          <Hint>
            <FormattedMessage {...messages.login} />
          </Hint>

          <ButtonsGroup>
            <Button appearance="primary">Facebook</Button>
            <Button appearance="danger">Google</Button>
          </ButtonsGroup>
        </Wrapper>
      </Screen>
    );
  }
}
