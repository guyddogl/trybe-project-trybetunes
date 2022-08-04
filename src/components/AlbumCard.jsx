import React, { Component } from 'react';
import PropTypes, { object } from 'prop-types';
import AlbumLink from './AlbumLink';

class AlbumCard extends Component {
  render() {
    const { albums, artist } = this.props;
    if (albums.length > 0) {
      return (
        <div className="row justify-content-center align-items-center">
          <p>
            {`Resultado de álbuns de: ${artist}`}
          </p>
          {albums.map((album, index) => (
            <div key={ index } className="col my-3">
              <div className="card shadow" style={ { width: '18rem' } }>
                <img
                  src={ album.artworkUrl100.replace(/100x100bb/g, '1000x1000bb') }
                  alt={ album.artistId }
                  className="card-img-top"
                  style={ { height: '13rem' } }
                />
                <AlbumLink
                  collectionName={ album.collectionName }
                  to={ `/album/${album.collectionId}` }
                  testid={ `link-to-album-${album.collectionId}` }
                />
              </div>
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
