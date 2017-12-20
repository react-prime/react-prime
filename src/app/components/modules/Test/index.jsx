import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';

import { install } from 'ducks/test';
import LogoIcon from 'vectors/logo.svg';
import Button from 'common/Button';
import TestPassed from './components/TestPassed';

const Test = ({ test: { passed, loading }, ...props }) => (
    <section>
        <LogoIcon />
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

export default connect(state => ({
    test: state.test,
}), { install })(Test);
