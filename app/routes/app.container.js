import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { compose } from 'ramda';

import { App } from './app.component';
import { selectLocalesLanguage } from '../modules/locales/locales.selectors';
import { StartupActions } from '../modules/startup/startup.redux';

const mapStateToProps = createStructuredSelector({
  language: selectLocalesLanguage,
});

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  startup: StartupActions.startup,
}, dispatch);

export default compose(
  hot(module),
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(App);
