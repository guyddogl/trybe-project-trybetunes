import React, { Component } from 'react';
import SectionHero from './SectionHero';

class HomeContent extends Component {
  render() {
    return (
      <div className="col-11 col-md-8">
        <nav className="theme-color">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              Home
              <i className="fas fa-home ms-2" />
            </li>
          </ol>
        </nav>
        <hr />
        <SectionHero />
      </div>
    );
  }
}

export default HomeContent;
