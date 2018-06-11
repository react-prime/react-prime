import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Demo from 'modules/Demo';

const App = () => (
  <main>
    <Switch>
      <Route path="/" component={Demo} exact />
    </Switch>
  </main>
);

export default App;
