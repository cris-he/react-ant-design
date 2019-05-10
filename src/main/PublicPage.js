import React, { Component } from 'react';
import PublicRoute from '../routes/PublicRoute';
import PublicLayout from '../layouts/PublicLayout';


class PublicPage extends Component {
  render() {
    return (
      <PublicLayout>
        <PublicRoute />
      </PublicLayout>
    );
  }
}

export default PublicPage;
