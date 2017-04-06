import React from 'react';
import { connect } from 'react-redux';
import cssModules from 'react-css-modules';
import _ from 'lodash/fp';

import { testInstall } from 'ducks/test';
import LogoIcon from 'vectors/logo.svg';
import confetti from 'images/confetti.png';
import styles from './Test.css';

const Test = ({ install, test }) => (
    <div styleName="login">
        <LogoIcon styleName="logo" />
        {test.passed ? (
            <div>
                <p styleName="message">
                    The boilerplate is successfully installed, you're ready to start.
                    <img src={confetti} styleName="confetti" role="presentation" />
                </p>
                <p styleName="message">Good Luck!</p>
            </div>
        ) : (
            <button onClick={install} styleName="button">
                {test.loading ? 'Installing ...' : 'Test installation'}
            </button>
        )}

    </div>
);

Test.propTypes = {
    install: React.PropTypes.func.isRequired,
    test: React.PropTypes.object,
};

const withHOCs = _.flow([
    cssModules(styles),
    connect(
        ({ test }) => ({ test }),
        { install: testInstall }
    ),
]);

export default withHOCs(Test);
