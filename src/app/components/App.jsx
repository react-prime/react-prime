import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Loading from 'common/Loading';

const Prime = lazy(() => import('modules/Prime'));
const Demo = lazy(() => import('modules/Demo'));

const App = () => (
  <main>
    <Suspense fallback={<Loading>Loading...</Loading>}>
      <Switch>
        <Route path="/" component={Prime} exact />
        <Route path="/demo" component={Demo} />
      </Switch>
    </Suspense>
  </main>
);

export default App;
