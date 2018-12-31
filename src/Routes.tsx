import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomePage, ComponentsPages } from './pages';

export const Routes = () => (
  <Switch>
    <Route path='/' exact component={HomePage} />
    <Route path='/components' component={ComponentsPages} />
  </Switch>
);
