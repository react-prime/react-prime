import React from 'react';
import styled from 'styled-components';

import Anchor from 'common/Anchor';
import Logo from 'vectors/logo.svg';
import GithubLogo from 'images/github-logo.png';
import { useDispatch } from 'services/hooks';
import { getData } from 'ducks/data/thunks';

const PrimeHeader = styled.header`
  text-align: center;
  padding: 50px 10px;
  margin: 0 0 50px;
  background: ${(props) => props.theme.colors.black};

  & > svg {
    width: 250px;
  }
`;

const PrimeContent = styled.section`
  text-align: center;
  padding: 0 10px;
  line-height: 25px;
`;

const GithubLink = styled.a`
  width: 20px;
  height: 20px;
  display: inline-block;

  & > img {
    width: 100%;
  }
`;

const Prime: React.FC = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getData());
  }, []);

  return (
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
};

export default Prime;
