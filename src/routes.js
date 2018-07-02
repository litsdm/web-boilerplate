/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';

import App from '@containers/App';
import Landing from '@containers/Landing';

const Routes = () => (
  <App>
    <Switch>
      <Route path="/" component={Landing} />
    </Switch>
  </App>
);

export default Routes;
