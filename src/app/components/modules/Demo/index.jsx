import React from 'react';
import styled from 'styled-components';

import Anchor from 'common/Anchor';

const CenteredSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
`;

const Demo = () => (
  <CenteredSection>
    React Prime
    <Anchor to="/">Go to home page</Anchor>
  </CenteredSection>
);

export default Demo;
