import React, { Component } from 'react';
import Header from '../components/Header';
import Breadcrumb from '../components/Breadcrumb';
import FormSearch from '../components/FormSearch';

class Search extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="container-fluid" data-testid="page-search">
          <div className="row justify-content-center align-items-center mt-3">
            <div className="col-12 col-md-8">
              <Breadcrumb icon="fas fa-search" route="Search" />
              <hr />
              <FormSearch />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Search;
