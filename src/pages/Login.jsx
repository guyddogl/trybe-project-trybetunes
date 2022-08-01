import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import { createUser } from '../services/userAPI';

class Login extends Component {
  state = {
    isEnterButtonDisabled: true,
    userName: '',
    isLoading: false,
  };

  validateInputName = ({ userName } = this.state) => {
    const minInputLength = 3;
    return userName.length < minInputLength;
  }

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, () => {
      this.setState({ isEnterButtonDisabled: this.validateInputName() });
    });
  }

  handleClick = () => {
    this.setState({ isLoading: true }, async () => {
      const { userName } = this.state;
      const { history } = this.props;
      await createUser({ name: userName });
      history.push('/search');
    });
  }

  render() {
    const { isEnterButtonDisabled, isLoading } = this.state;
    return (
      <div className="container" data-testid="page-login">
        {isLoading ? <Loading />
          : (
            <div>
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
                  onClick={ this.handleClick }
                >
                  Enter
                </button>
              </form>
            </div>
          )}
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
