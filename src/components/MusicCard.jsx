import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MusicCard extends Component {
  render() {
    const {
      trackName,
      previewUrl,
    } = this.props;
    return (
      <>
        <span>{ trackName }</span>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          {`O seu navegador não suporta o elemento ${trackName}`}
          <code>audio</code>
        </audio>
      </>
    );
  }
}

MusicCard.propTypes = {
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
};

export default MusicCard;
