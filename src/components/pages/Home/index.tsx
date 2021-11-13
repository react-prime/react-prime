import React from 'react';

import Anchor from 'common/Anchor';
import Logo from 'vectors/logo.svg';
import GithubLogo from 'images/github-logo.png';

import { GithubLink, PrimeContent, PrimeHeader } from './styled';

const Prime: React.FC = () => (
  <>
    <PrimeHeader>
      <Logo />
    </PrimeHeader>
    <PrimeContent>
      <p>Created by <Anchor href="https://github.com/JBostelaar">@JBostelaar</Anchor> and maintained by <Anchor href="https://labela.nl/">LabelA</Anchor></p>
      <GithubLink
        href="https://github.com/react-prime/react-prime"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={GithubLogo} alt="github" />
      </GithubLink>
    </PrimeContent>
  </>
);

export default Prime;
