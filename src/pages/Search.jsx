import React, { Component } from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import AlbumCard from '../components/AlbumCard';

class Search extends Component {
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
        <Header />
        <div data-testid="page-search">
          <div className="input-group mb-3">
            <input
              type="text"
              name="inputSearch"
              value={ inputSearch }
              className="form-control input"
              data-testid="search-artist-input"
              placeholder="Search"
              onChange={ (e) => this.onInputChange(e) }
            />
          </div>
          <button
            type="button"
            className="btn btn-success submit mt-2"
            data-testid="search-artist-button"
            disabled={ isSearchButtonDisabled }
            onClick={ this.handleSearch }
          >
            Enter
          </button>
          {isLoading && <Loading />}
          {searchResult && <AlbumCard albums={ albums } artist={ artistName } />}
        </div>
      </>
    );
  }
}

export default Search;
