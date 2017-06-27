import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import cssModules from 'react-css-modules';
import _ from 'lodash/fp';

import Button from 'common/Button';
import { install } from 'ducks/test';
import LogoIcon from 'vectors/logo.svg';
import TestPassed from './components/TestPassed';
import styles from './styles.css';

const Test = props => (
    <section styleName="test">
        <LogoIcon styleName="logo" />
        {props.test.passed ? (
            <TestPassed />
        ) : (
            <Button onClick={props.install}>
                {props.test.loading ? 'Installing ...' : 'Test installation'}
            </Button>
        )}
    </section>
);

Test.propTypes = {
    install: PT.func.isRequired,
    test: PT.shape({
        error: PT.bool,
        loading: PT.bool,
        passed: PT.bool,
    }),
};

export default _.flowRight([
    connect(({ test }) => ({ test }), { install }),
    cssModules(styles),
])(Test);
