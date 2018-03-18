import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { IntlProvider } from 'react-intl';

import { translationMessages } from '../i18n';

export class App extends PureComponent {
  static propTypes = {
    language: PropTypes.string,
    children: PropTypes.node,
    match: PropTypes.object.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
    location: PropTypes.object.isRequired,
  };

  render() {
    return (
      <Fragment>
        <Helmet
          titleTemplate="%s - Drawing Game"
          defaultTitle="Drawing Game"
          meta={[
            { name: 'description', content: 'Drawing game' },
          ]}
        />

        <IntlProvider
          locale={this.props.language}
          messages={translationMessages[this.props.language]}
          location={this.props.location}
        >
          {React.Children.only(this.props.children)}
        </IntlProvider>
      </Fragment>
    );
  }
}
