import React, { Component } from 'react';
import Header from '../components/Header';

class Favorites extends Component {
  render() {
    return (
      <>
        <Header />
        <div data-testid="page-search">
          Album
        </div>
      </>
    );
  }
}

export default Favorites;
