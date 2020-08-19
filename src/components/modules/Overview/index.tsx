import React from 'react';
import styled from 'styled-components';

import ReactAsync from 'modules/ReactAsync';
import ReactQuery from 'modules/ReactQuery';
import Redux from 'modules/Redux';
import Swr from 'modules/Swr';

const Card = styled.div`
  border: 1px solid rgb(237, 242, 247);
  border-radius: 0.25rem;
  display: flex;
  padding: 1rem;
  width: 100%;
`;

const Container = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 1rem;
  width: 100%;
`;

const Overview: React.FC = () => (
  <Container>
    <Card><ReactAsync /></Card>
    <Card><ReactQuery /></Card>
    <Card><Redux /></Card>
    <Card><Swr /></Card>
  </Container>
);

export default Overview;
