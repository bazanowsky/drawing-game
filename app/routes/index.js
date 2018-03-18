import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

/* eslint-disable-next-line */
import '@atlaskit/css-reset';

import '../theme/global';

import App from './app.container';
import { Home } from './home';
import { NotFound } from './notFound';

export class RootContainer extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/404" component={NotFound} />
        <App>
          <Switch>
            <Route exact path="/" component={Home} />

            <Route component={NotFound} />
          </Switch>
        </App>
      </Switch>
    );
  }
}

export default withRouter(RootContainer);
