import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { hot } from 'react-hot-loader';
import { withRouter } from 'react-router-dom';
import { compose } from 'ramda';

import { AuthActions } from '../../modules/auth/auth.redux';
import { selectIsLoggedIn } from '../../modules/auth/auth.selectors';
import { Login } from './login.component';

const mapStateToProps = createStructuredSelector({
  isLoggedIn: selectIsLoggedIn,
});

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  login: AuthActions.requestLogin,
}, dispatch);

export default compose(
  hot(module),
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(Login);
