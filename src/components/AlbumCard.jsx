import React, { Component } from 'react';
import PropTypes, { object } from 'prop-types';
import { Link } from 'react-router-dom';

class AlbumCard extends Component {
  render() {
    const { albums, artist } = this.props;
    if (albums.length > 0) {
      return (
        <div>
          <p>
            {`Resultado de álbuns de: ${artist}`}
          </p>
          {albums.map((album, index) => (
            <div key={ index }>
              <p>{ album.collectionName }</p>
              <img src={ album.artworkUrl100 } alt={ album.artistId } />
              <p>{ album.artistId }</p>
              <p>{ album.releaseDate }</p>
              <Link
                to={ `/album/${album.collectionId}` }
                data-testid={ `link-to-album-${album.collectionId}` }
              >
                <button
                  type="button"
                  className="btn btn-md btn-primary"
                >
                  Músicas
                </button>
              </Link>
            </div>
          ))}
        </div>
      );
    }
    return (
      <p>
        Nenhum álbum foi encontrado
      </p>
    );
  }
}

AlbumCard.propTypes = {
  albums: PropTypes.arrayOf(object.isRequired).isRequired,
  artist: PropTypes.string.isRequired,
};

export default AlbumCard;
