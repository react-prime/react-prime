import React from 'react';
import { connect } from 'react-redux';
import { signIn } from 'app/ducks/auth';
import cssModules from 'react-css-modules';

import styles from './Login.css';

const Login = ({ signIn, auth }) => (
	<div styleName="login">
		{auth.authenticated ? (
			<p>User is loggedin</p>
		) : null}
		<button onClick={signIn} styleName="button">Login</button>
	</div>
);

Login.propTypes = {
	signIn: React.PropTypes.func.isRequired,
	auth: React.PropTypes.object,
};

export default connect(state => ({
	auth: state.auth,
}), { signIn })(cssModules(styles)(Login));
