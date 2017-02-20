import React from 'react';
import { connect } from 'react-redux';
import { testInstallation } from 'ducks/test';
import cssModules from 'react-css-modules';
import LogoIcon from 'vectors/logo.svg';
import confetti from 'images/confetti.png';
import styles from './Test.css';

const Test = ({ testInstallation, test }) => (
    <div styleName="login">
        <LogoIcon styleName="logo" />
        {test.test_passed ? (
            <div>
                <p styleName="message">
                    The boilerplate is successfully installed, you're ready to start.
                    <img src={confetti} styleName="confetti" role="presentation" />
                </p>
                <p styleName="message">Good Luck!</p>
            </div>
        ) : (
            <button onClick={testInstallation} styleName="button">Test installation</button>
        )}

    </div>
);

Test.propTypes = {
    testInstallation: React.PropTypes.func.isRequired,
    test: React.PropTypes.object,
};

export default connect(state => ({
    test: state.test,
}), { testInstallation })(cssModules(styles)(Test));
