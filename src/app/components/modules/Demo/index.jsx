import React from 'react';

import LogoIcon from 'vectors/logo.svg';
import Anchor from 'common/Anchor';
import CenteredSection from 'common/CenteredSection';

const Demo = () => (
  <CenteredSection variant="green">
    <LogoIcon />
    <p>Created by <a href="https://github.com/JBostelaar/react-prime" target="_blank" rel="noopener noreferrer">@JBostelaar</a>, maintained by <a href="https://labela.nl/" target="_blank" rel="noopener noreferrer">LabelA</a> with <a href="https://github.com/JBostelaar/react-prime/graphs/contributors" target="_blank" rel="noopener noreferrer">contributors</a>.</p>
    <Anchor to="/" variant="green">Go to home page</Anchor>
  </CenteredSection>
);

export default Demo;
