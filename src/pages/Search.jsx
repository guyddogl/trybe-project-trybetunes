import React, { Component } from 'react';
import Header from '../components/Header';

class Search extends Component {
  state = {
    isSearchButtonDisabled: true,
  };

  validateInputName = ({ userName } = this.state) => {
    const minInputLength = 2;
    return userName.length < minInputLength;
  }

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, () => {
      this.setState({ isSearchButtonDisabled: this.validateInputName() });
    });
  }

  handleSearch = () => {
    console.log('teste');
  }

  render() {
    const { isSearchButtonDisabled } = this.state;
    return (
      <>
        <Header />
        <div data-testid="page-search">
          <form className="my-4">
            <div className="input-group mb-3">
              <input
                type="text"
                name="userName"
                className="form-control input"
                data-testid="search-artist-input"
                placeholder="Type your username"
                onChange={ (e) => this.onInputChange(e) }
              />
            </div>
            <button
              type="submit"
              className="btn btn-success submit mt-2"
              data-testid="search-artist-button"
              disabled={ isSearchButtonDisabled }
              onClick={ this.handleSearch }
            >
              Enter
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default Search;
