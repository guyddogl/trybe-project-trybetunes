import React, { Component } from 'react';
import Loading from './Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import AlbumCard from './AlbumCard';

class FormSearch extends Component {
  state = {
    isSearchButtonDisabled: true,
    inputSearch: '',
    albums: [],
    isLoading: false,
    searchResult: false,
    artistName: '',
  };

  validateInputName = ({ inputSearch } = this.state) => {
    const minInputLength = 2;
    return inputSearch.length < minInputLength;
  }

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, () => {
      this.setState({ isSearchButtonDisabled: this.validateInputName() });
    });
  }

  handleSearch = () => {
    const { inputSearch } = this.state;
    this.setState({
      isLoading: true,
      artistName: inputSearch,
      searchResult: true },
    async () => {
      const dataAlbums = await searchAlbumsAPI(inputSearch);
      this.setState({
        albums: dataAlbums,
        inputSearch: '',
        isLoading: false,
      });
    });
  }

  render() {
    const {
      isSearchButtonDisabled,
      inputSearch,
      isLoading,
      albums,
      searchResult,
      artistName,
    } = this.state;
    return (
      <>
        <div className="input-group mb-3">
          <input
            type="text"
            name="inputSearch"
            value={ inputSearch }
            className="form-control input-search"
            data-testid="search-artist-input"
            placeholder="Search by artist..."
            onChange={ (e) => this.onInputChange(e) }
          />
          <button
            type="button"
            className="input-group-text username"
            data-testid="search-artist-button"
            disabled={ isSearchButtonDisabled }
            onClick={ this.handleSearch }
          >
            <i className="fas fa-search" />
          </button>
          {isLoading && <Loading />}
        </div>
        {searchResult && <AlbumCard albums={ albums } artist={ artistName } />}
      </>
    );
  }
}

export default FormSearch;
