import React, { Component } from 'react';
import SectionHeroCard1 from './SectionHeroCard1';
import SectionHeroCard2 from './SectionHeroCard2';

class SectionHero extends Component {
  render() {
    return (
      <>
        <div className="p-2 my-md-5 my-4 bg-light border rounded-3 shadow-sm">
          <div className="container-fluid py-3">
            <div className="row justify-content-center align-items-center">
              <SectionHeroCard1 />
            </div>
          </div>
        </div>
        <div className="row align-items-md-stretch">
          <SectionHeroCard2 />
        </div>
      </>
    );
  }
}

export default SectionHero;
