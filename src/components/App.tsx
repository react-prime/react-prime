import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import GlobalStyle from 'styles';

const Home = lazy(() => import('pages/Home'));

const App: React.FC = () => (
  <main>
    <GlobalStyle />
    <Suspense fallback={<span>loading</span>}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  </main>
);

export default App;
