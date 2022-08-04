import React, { Component } from 'react';

class SectionHeroCard2 extends Component {
  render() {
    return (
      <>
        <div className="col-md-6 mb-4 mb-md-0">
          <div className="h-100 py-3 px-4 text-bg-light border rounded-3 shadow-sm">
            <h2>Search for albums</h2>
            <p>Here you can find the most popular songs</p>
            <button
              className="btn btn-success theme-button"
              type="button"
            >
              <i className="fas fa-search me-2" />
              Search
            </button>
          </div>
        </div>
        <div className="col-md-6 mb-4 mb-md-0">
          <div className="h-100 py-3 px-4 text-bg-light border rounded-3 shadow-sm">
            <h2>Save yours favorites</h2>
            <p>Listen your favorites songs anywhere</p>
            <button
              className="btn btn-success theme-button"
              type="button"
            >
              <i className="fas fa-star me-2" />
              Favorites
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default SectionHeroCard2;
