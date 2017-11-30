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

const Test = ({ test: { passed, loading }, ...props }) => (
    <section styleName="test">
        <LogoIcon styleName="logo" />
        {passed ? (
            <TestPassed />
        ) : (
            <Button onClick={props.install}>
                {loading ? 'Installing ...' : 'Test installation'}
            </Button>
        )}
    </section>
);

Test.propTypes = {
    install: PT.func.isRequired,
    test: PT.shape({
        loading: PT.bool,
        passed: PT.bool,
    }),
};

export default _.flowRight([
    connect(({ test }) => ({ test }), { install }),
    cssModules(styles),
])(Test);
