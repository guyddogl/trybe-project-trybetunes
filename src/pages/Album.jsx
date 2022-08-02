import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from '../components/Loading';

class Album extends Component {
  state = {
    dataAlbum: [],
    infoAlbum: {},
    favoritesSongs: [],
    isLoading: false,
  }

  componentDidMount() {
    this.setState({ isLoading: true }, async () => {
      const favorites = await getFavoriteSongs();
      this.setState({ favoritesSongs: favorites });
      const { match: { params: { id } } } = this.props;
      const dataAlbum = await getMusics(id);
      this.setState({
        dataAlbum,
        infoAlbum: dataAlbum[0],
        isLoading: false,
      });
    });
  }

  checkIfIsFavorite = (id) => {
    const { favoritesSongs } = this.state;
    return favoritesSongs.some((music) => music.trackId === id);
  }

  render() {
    const {
      infoAlbum,
      dataAlbum,
      isLoading,
    } = this.state;
    const { match: { params: { id } } } = this.props;
    return (
      <>
        <Header />
        <div data-testid="page-album">
          {isLoading && <Loading />}
          <p data-testid="artist-name">{ infoAlbum.artistName }</p>
          <p data-testid="album-name">{ infoAlbum.collectionName }</p>
          <ul>
            { dataAlbum.map((music, index) => index !== 0 && (
              <li key={ index }>
                <MusicCard
                  trackName={ music.trackName }
                  previewUrl={ music.previewUrl }
                  trackId={ music.trackId }
                  objectMusic={ music }
                  collectionId={ Number(id) } // +id || ~~id || id * 1
                  isFavorite={ this.checkIfIsFavorite(music.trackId) }
                />
              </li>))}
          </ul>
        </div>
      </>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Album;
