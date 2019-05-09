import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Simple from '../pages/Simple';

const Routes = () => (
    <Switch>
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/simple' component={Simple} />
    </Switch>
)


export default Routes;
