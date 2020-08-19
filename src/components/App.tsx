import React, { lazy, Suspense } from 'react';
import { Switch, Route, withRouter, RouteComponentProps } from 'react-router-dom';

import GlobalStyle from 'styles';

const Overview = lazy(() => import('modules/Overview'));

const App: React.FC<RouteComponentProps> = () => (
  <main>
    <GlobalStyle />
    <Suspense fallback={<span>loading</span>}>
      <Switch>
        <Route path="/" component={Overview} exact />
      </Switch>
    </Suspense>
  </main>
);

export default withRouter(App);
