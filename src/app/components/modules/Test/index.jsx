import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { install } from 'ducks/test';
import LogoIcon from 'vectors/logo.svg';
import Button from 'common/Button';
import TestPassed from './components/TestPassed';

const CenteredSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 20px;

    svg {
        margin: 50px 0;
    }
`;


const Test = ({ test: { passed, loading }, ...props }) => (
    <CenteredSection>
        <LogoIcon />
        {passed ? (
            <TestPassed />
        ) : (
            <Button onClick={props.install}>
                {loading ? 'Installing ...' : 'Test installation'}
            </Button>
        )}
    </CenteredSection>
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
