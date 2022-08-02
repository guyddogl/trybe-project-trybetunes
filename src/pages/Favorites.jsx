import React, { Component } from 'react';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from '../components/Loading';

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
      console.log(favorites);
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
        <div data-testid="page-favorites">
          Favorites
          {isLoading && <Loading />}
          <ul>
            { favoritesSongs.map((music, index) => (
              <li key={ index }>
                <MusicCard
                  trackName={ music.trackName }
                  previewUrl={ music.previewUrl }
                  trackId={ music.trackId }
                  collectionId={ music.collectionId } // +id || ~~id || id * 1
                  isFavorite
                />
              </li>))}
          </ul>
        </div>
      </>
    );
  }
}

export default Favorites;
