import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getMusics from '../services/musicsAPI';
import { addSong, removeSong, getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class MusicCard extends Component {
  state = {
    isLoading: false,
    isFavorite: false,
  };

  componentDidMount() {
    const { isFavorite } = this.props;
    this.setState({ isFavorite });
  }

  getMusicObject = async (collectionId, trackId) => {
    const albumData = await getMusics(collectionId);
    return albumData.filter((e, index) => index !== 0 && e)
      .find((e) => e.trackId === trackId);
  }

  handleCheck = (e) => {
    const { reloadFavoriteList, objectMusic } = this.props;
    this.setState({
      isLoading: true,
      isFavorite: e.target.checked,
    }, async () => {
      if (e.target.checked === true) {
        await addSong(objectMusic);
      } else {
        await removeSong(objectMusic);
      }
      if (reloadFavoriteList) {
        const favorites = await getFavoriteSongs();
        reloadFavoriteList(favorites);
      }
      this.setState({ isLoading: false });
    });
  }

  render() {
    const {
      trackName,
      previewUrl,
      trackId,
      collectionId,
    } = this.props;
    const { isLoading, isFavorite } = this.state;
    return (
      <div>
        {isLoading && <Loading />}
        <span>{ trackName }</span>
        <span>{ trackId }</span>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          {`O seu navegador não suporta o elemento ${trackName}`}
          <code>audio</code>
        </audio>
        <label htmlFor={ trackName }>
          Favorita
          <input
            id={ trackName }
            type="checkbox"
            data-testid={ `checkbox-music-${trackId}` }
            name={ trackId }
            checked={ isFavorite }
            onChange={ (e) => this.handleCheck(e, collectionId, trackId) }
          />
        </label>
      </div>
    );
  }
}

MusicCard.propTypes = {
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  trackId: PropTypes.number.isRequired,
  collectionId: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  objectMusic: PropTypes.objectOf({}).isRequired,
  reloadFavoriteList: PropTypes.func,
};

MusicCard.defaultProps = {
  reloadFavoriteList: false,
};

export default MusicCard;
