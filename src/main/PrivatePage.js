import React, { Component } from 'react';
import Routes from '../routes/PrivateRoute';
import PrivateLayout from '../layouts/PrivateLayout';


class PrivatePage extends Component {
  render() {
    return (
      <PrivateLayout>
        <Routes />
      </PrivateLayout>
    );
  }
}

export default PrivatePage;
