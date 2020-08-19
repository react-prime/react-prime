import React from 'react';

import ReactAsync from 'modules/ReactAsync';
import ReactQuery from 'modules/ReactQuery';
import Redux from 'modules/Redux';
import Swr from 'modules/Swr';

const Home: React.FC = () => (
  <div>
    <ReactAsync />
    <ReactQuery />
    <Redux />
    <Swr />
  </div>
);

export default Home;
