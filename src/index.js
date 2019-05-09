import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './services/serviceWorker';

import 'antd/dist/antd.css';

// public pages
import Login from './pages/Auth/Login';
// private pages
import App from './pages/App';


import { Provider } from 'react-redux';
import configStore from './store/config-store';
const store = configStore();
console.log('index.js: root', store.getState());
const fakeAuth = store.getState();

function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={props =>
                fakeAuth.user.token ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: props.location }
                            }}
                        />
                    )
            }
        />
    );
}

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <PrivateRoute path='/' name='Main' component={App} />
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
