import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AuthLayout from '../layouts/PublicLayout';

import Login from '../pages/Auth/Login';

const PublicRoute = () => (
    <Switch>
        <Route path='/auth/login' component={Login} />
    </Switch>
)


export default PublicRoute;
