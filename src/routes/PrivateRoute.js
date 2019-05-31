import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Simple from '../pages/Simple';
import Exception403 from '../pages/Exception/403';
import Exception404 from '../pages/Exception/404';
import Exception500 from '../pages/Exception/500';

const PrivateRoute = () => (
    <Switch>
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/simple' component={Simple} />
        <Route path='/Exception/403' component={Exception403} />
        <Route path='/Exception/404' component={Exception404} />
        <Route path='/Exception/500' component={Exception500} />
        <Redirect from='/Exception/' to="/Exception/404" />
    </Switch>
)


export default PrivateRoute;
