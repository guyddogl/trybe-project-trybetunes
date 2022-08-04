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
      <div
        className="row justify-content-center align-items-center my-3"
        style={ { minHeight: '110px' } }
      >
        {isLoading ? <Loading />
          : (
            <>
              <label htmlFor={ trackName } className="mb-2">
                {/* Favorita */}
                <input
                  id={ trackName }
                  className="form-check-input"
                  type="checkbox"
                  data-testid={ `checkbox-music-${trackId}` }
                  name={ trackId }
                  checked={ isFavorite }
                  onChange={ (e) => this.handleCheck(e, collectionId, trackId) }
                />
                <span className="ms-2">{ trackName }</span>
              </label>
              <audio data-testid="audio-component" src={ previewUrl } controls>
                <track kind="captions" />
                {`O seu navegador não suporta o elemento ${trackName}`}
                <code>audio</code>
              </audio>
            </>
          )}
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
