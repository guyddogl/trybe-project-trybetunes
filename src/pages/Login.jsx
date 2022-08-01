import React, { Component } from 'react';

class Search extends Component {
  state = {
    isEnterButtonDisabled: true,
    userName: '',
  };

  validateName = ({ userName } = this.state) => {
    const minInputLength = 2;
    return userName.length < minInputLength;
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const { userName } = this.state;
    const minInputLength = 2;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => {
      this.setState({ isEnterButtonDisabled: userName.length < minInputLength });
    });
  }

  render() {
    const { isEnterButtonDisabled } = this.state;
    return (
      <div className="container" data-testid="page-login">
        <span className="fs-4 title">
          TrybeTunes
        </span>
        <form className="my-4">
          <div className="input-group mb-3">
            <span
              className="input-group-text username"
            >
              <i className="far fa-user-circle fa-lg" />
            </span>
            <input
              type="text"
              name="userName"
              className="form-control input"
              data-testid="login-name-input"
              placeholder="Type your username"
              onChange={ (e) => this.onInputChange(e) }
            />
          </div>
          <button
            type="submit"
            className="btn btn-success submit mt-2"
            data-testid="login-submit-button"
            disabled={ isEnterButtonDisabled }
            onClick={ (userName) => createUser({ name: userName }) }
          >
            Enter
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
