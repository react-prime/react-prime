import React, { lazy, Suspense } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import GlobalStyle from 'styles';

const Prime = lazy(() => import('modules/Prime'));

const App = () => (
  <main>
    <GlobalStyle />
    <Suspense fallback={<span>loading</span>}>
      <Switch>
        <Route path="/" component={Prime} exact />
      </Switch>
    </Suspense>
  </main>
);

export default withRouter(App);
