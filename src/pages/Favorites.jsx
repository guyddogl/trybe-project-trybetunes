import React, { Component } from 'react';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from '../components/Loading';
import Breadcrumb from '../components/Breadcrumb';

class Favorites extends Component {
  state = {
    favoritesSongs: [],
    isLoading: false,
  }

  componentDidMount() {
    this.setState({ isLoading: true }, async () => {
      const favorites = await getFavoriteSongs();
      this.setState({
        favoritesSongs: favorites,
        isLoading: false,
      });
    });
  }

  reloadFavoriteList = (array) => {
    this.setState({
      favoritesSongs: array,
    });
  }

  render() {
    const {
      favoritesSongs,
      isLoading,
    } = this.state;
    return (
      <>
        <Header />
        <div className="container-fluid" data-testid="page-favorites">
          <div className="row justify-content-center align-items-center mt-3">
            <div className="col-12 col-md-8">
              <Breadcrumb icon="fas fa-star" route="Favorites" />
              <hr />
            </div>
          </div>
          <br />
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-md-8">
              {isLoading && <Loading />}
              <ul className="list-group list-group-flush">
                { favoritesSongs.map((music, index) => (
                  <li className="list-group-item" key={ index }>
                    <MusicCard
                      trackName={ music.trackName }
                      previewUrl={ music.previewUrl }
                      trackId={ Number(music.trackId) }
                      collectionId={ Number(music.collectionId) }
                      objectMusic={ music }
                      isFavorite
                      reloadFavoriteList={ this.reloadFavoriteList }
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

export default Favorites;
