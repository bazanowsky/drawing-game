import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { hot } from 'react-hot-loader';
import { withRouter } from 'react-router-dom';
import { compose } from 'ramda';

import { selectIsLoggedIn, selectUser } from '../../modules/auth/auth.selectors';
import { Home } from './home.component';
import { AuthActions } from '../../modules/auth/auth.redux';

const mapStateToProps = createStructuredSelector({
  isLoggedIn: selectIsLoggedIn,
  user: selectUser,
});

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  logout: AuthActions.logout,
}, dispatch);

export default compose(
  hot(module),
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(Home);
