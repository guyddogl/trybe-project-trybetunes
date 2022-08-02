import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getMusics from '../services/musicsAPI';
import { addSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class MusicCard extends Component {
  state = {
    isLoading: false,
  };

  getMusicObject = async (collectionId, trackId) => {
    const albumData = await getMusics(collectionId);
    return albumData.filter((e, index) => index !== 0 && e)
      .filter((e) => e.trackId === trackId);
  }

  handleCheck = async (collectionId, trackId) => {
    this.setState({ isLoading: true });
    const music = await this.getMusicObject(collectionId, trackId);
    await addSong(music);
    this.setState({ isLoading: false });
    // console.log(music);
  }

  render() {
    const {
      trackName,
      previewUrl,
      trackId,
      collectionId,
    } = this.props;
    const { isLoading } = this.state;
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
        <input
          type="checkbox"
          data-testid={ `checkbox-music-${trackId}` }
          name={ trackId }
          onChange={ () => this.handleCheck(collectionId, trackId) }
        />
      </div>
    );
  }
}

MusicCard.propTypes = {
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  trackId: PropTypes.number.isRequired,
  collectionId: PropTypes.number.isRequired,
};

export default MusicCard;
