import React, { Component } from 'react';
import Header from '../components/Header';

class Album extends Component {
  render() {
    return (
      <>
        <Header />
        <div data-testid="page-album">
          Albums
        </div>
      </>
    );
  }
}

export default Album;
