import React from 'react';
import { connect } from 'react-redux';
import { signIn } from 'app/actions/auth';

const Login = ({ signIn, auth }) => (
	<div className="login">
		{auth.authenticated ? (
			<p>User is loggedin</p>
		) : null}
		<button onClick={signIn}>Login</button>
	</div>
);

Login.propTypes = {
	signIn: React.PropTypes.func.isRequired,
	auth: React.PropTypes.object,
};

export default connect(state => ({
	auth: state.auth,
}), { signIn })(Login);
