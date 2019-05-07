import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';

import logo from '../logo.svg';
import './App.css';

import Dashboard from './Dashboard';
import Simple from './Simple';

import BasicLayout from '../layouts/BasicLayout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BasicLayout>
          <Switch>
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/simple' component={Simple} />
          </Switch>
        </BasicLayout>
      </div>
    );
  }
}

export default App;
