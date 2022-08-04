import React, { Component } from 'react';
import soundson from '../assets/images/soundson.gif';

class SectionHeroCard1 extends Component {
  render() {
    return (
      <>
        <div className="col-11 col-md-4 text-center">
          <h1 className="display-5 fw-bold">
            <span className="theme-color">Trybe</span>
            Tunes
          </h1>
          <p className="fs-4 text-dark">The best playlists are here!</p>
        </div>
        <div className="col-10 col-md-4">
          <img
            src={ soundson }
            alt="Sounds On"
            className="img-fluid mx-auto d-block soundson"
          />
        </div>
      </>
    );
  }
}

export default SectionHeroCard1;
