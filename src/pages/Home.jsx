import React, { Component } from 'react';
import Header from '../components/Header';
import HomeContent from '../components/HomeContent';

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="container-fluid" data-testid="page-favorites">
          <div className="row justify-content-center align-items-center mt-3">
            <HomeContent />
          </div>
        </div>
      </>

    );
  }
}

export default Home;
