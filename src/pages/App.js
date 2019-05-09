import React, { Component } from 'react';
import Routes from '../routes';
import BasicLayout from '../layouts/BasicLayout';


class App extends Component {
  render() {
    return (
      <BasicLayout>
        <Routes />
      </BasicLayout>
    );
  }
}

export default App;
