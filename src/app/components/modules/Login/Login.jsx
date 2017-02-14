import React from 'react';
import { connect } from 'react-redux';
import { signIn } from 'app/ducks/auth';
import cssModules from 'react-css-modules';
import LogoIcon from '-!babel!svg-react!vectors/logo.svg';
import styles from './Login.css';

const Login = ({ signIn, auth }) => (
	<div styleName="login">
		<LogoIcon styleName="logo" />
		{auth.authenticated ? (
			<p styleName="message">User is loggedin</p>
		) : (
			<button onClick={signIn} styleName="button">Login</button>
		)}

	</div>
);

Login.propTypes = {
	signIn: React.PropTypes.func.isRequired,
	auth: React.PropTypes.object,
};

export default connect(state => ({
	auth: state.auth,
}), { signIn })(cssModules(styles)(Login));
