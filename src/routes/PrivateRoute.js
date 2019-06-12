import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Simple from '../pages/Simple';
import Exception403 from '../pages/Exception/403';
import Exception404 from '../pages/Exception/404';
import Exception500 from '../pages/Exception/500';

import Calendar from '../pages/Calendar';


const PrivateRoute = () => (
    <Switch>
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/simple' component={Simple} />
        <Route path='/calendar' component={Calendar} />
        <Route path='/exception/403' component={Exception403} />
        <Route path='/exception/404' component={Exception404} />
        <Route path='/exception/500' component={Exception500} />
        <Redirect from='/exception/' to="/exception/404" />
        <Redirect from='/' to="/dashboard" />
    </Switch>
)


export default PrivateRoute;
