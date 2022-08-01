import React, { Component } from 'react';
import PropTypes, { object } from 'prop-types';
import { Link } from 'react-router-dom';

class AlbumsCard extends Component {
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
                type="button"
                to={ `/album/${album.collectionId}` }
                data-testid={ `link-to-album-${album.collectionId}` }
              />
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

AlbumsCard.propTypes = {
  albums: PropTypes.arrayOf(object.isRequired).isRequired,
  artist: PropTypes.string.isRequired,
};

export default AlbumsCard;
