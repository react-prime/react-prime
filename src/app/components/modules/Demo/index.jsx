import React from 'react';

import LogoIcon from 'vectors/logo.svg';
import Anchor from 'common/Anchor';
import CenteredSection from 'common/CenteredSection';

const Demo = () => (
  <CenteredSection variant="green">
    <LogoIcon />
    <Anchor to="/" variant="green">Go to home page</Anchor>
  </CenteredSection>
);

export default Demo;
