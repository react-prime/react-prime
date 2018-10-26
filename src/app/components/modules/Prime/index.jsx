import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { install } from 'ducks/demo';
import LogoIcon from 'vectors/logo.svg';
import Button from 'common/Button';
import InstallationPassed from './components/InstallationPassed';

const CenteredSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;

  svg {
    margin: 50px 0;
  }
`;


const Demo = ({ installation: { passed, loading }, ...props }) => (
  <CenteredSection>
    <LogoIcon />
    {passed ? (
      <InstallationPassed />
    ) : (
      <Button onClick={props.install}>
        {loading ? 'Installing ...' : 'Test installation'}
      </Button>
    )}
  </CenteredSection>
);

Demo.propTypes = {
  install: PT.func.isRequired,
  installation: PT.shape({
    loading: PT.bool,
    passed: PT.bool,
  }),
};

export default connect((state) => ({
  installation: state.demo,
}), { install })(Demo);
