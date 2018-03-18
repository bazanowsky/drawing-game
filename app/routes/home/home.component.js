import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

import messages from './home.messages';
import { Wrapper, Logo, Title } from './home.styles';
import { Screen } from '../../theme';

export class Home extends PureComponent {
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
          <Title>Home</Title>
        </Wrapper>
      </Screen>
    );
  }
}
