import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from '../components/Loading';
import Breadcrumb from '../components/Breadcrumb';

class Album extends Component {
  state = {
    dataAlbum: [],
    infoAlbum: {},
    img: '',
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
        img: dataAlbum[0].artworkUrl100,
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
      img,
    } = this.state;
    const { match: { params: { id } } } = this.props;
    return (
      <>
        <Header />
        <div className="container-fluid" data-testid="page-album">
          <div className="row justify-content-center align-items-center mt-3">
            <div className="col-12 col-md-8">
              <Breadcrumb icon="fa-solid fa-compact-disc" route="Album" />
              <hr />
            </div>
          </div>
          <br />
          <div className="row justify-content-center align-items-center mt-3">
            <div className="col-12 col-md-8">
              <div className="row justify-content-center align-items-center">
                <div className="col-12 col-md-2">
                  <img
                    src={ img.replace(/100x100bb/g, '1000x1000bb') }
                    alt={ infoAlbum.collectionName }
                    className="img-fluid mx-auto d-block shadow"
                  />
                </div>
                <div className="col-12 col-md-4 text-start">
                  <h4 data-testid="artist-name">{ infoAlbum.artistName }</h4>
                  <h6 data-testid="album-name">{ infoAlbum.collectionName }</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-md-5 my-5">
              {isLoading && <Loading />}

              <ul className="list-group list-group-flush">
                { dataAlbum.map((music, index) => index !== 0 && (
                  <li className="list-group-item" key={ index }>
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
          </div>
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
