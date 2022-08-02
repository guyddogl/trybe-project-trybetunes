import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';

class Album extends Component {
  state = {
    dataAlbum: [],
    infoAlbum: {},
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const dataAlbum = await getMusics(id);
    this.setState({
      dataAlbum,
      infoAlbum: dataAlbum[0],
    });
  }

  render() {
    const {
      infoAlbum,
      dataAlbum,
    } = this.state;

    return (
      <>
        <Header />
        <div data-testid="page-album">
          Album
          <p data-testid="artist-name">{ infoAlbum.artistName }</p>
          <p data-testid="album-name">{ infoAlbum.collectionName }</p>
          <ul>
            { dataAlbum.map((music, index) => index !== 0 && (
              <li key={ index }>
                <MusicCard
                  trackName={ music.trackName }
                  previewUrl={ music.previewUrl }
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
