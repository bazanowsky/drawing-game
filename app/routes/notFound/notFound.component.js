import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import Button from '@atlaskit/button';

import { Container } from './notFound.styles';

export class NotFound extends PureComponent {
  render() {
    return (
      <Container>
        <Helmet
          title="Not Found"
        />

        <h1>404</h1>
        <Link to="/">
          <Button appearance="primary">
            Home
          </Button>
        </Link>
      </Container>
    );
  }
}
