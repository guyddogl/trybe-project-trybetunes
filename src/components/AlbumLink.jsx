import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class AlbumLink extends Component {
  render() {
    const { collectionName, to, testid } = this.props;
    return (
      <div className="card-body">
        <p className="card-text">{ collectionName }</p>
        <Link
          to={ to }
          data-testid={ testid }
        >
          <button
            type="button"
            className="btn btn-success submit mt-2"
          >
            <i className="fa-regular fa-folder-open me-2" />
            Musics
          </button>
        </Link>
      </div>
    );
  }
}

AlbumLink.propTypes = {
  collectionName: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
};

export default AlbumLink;
