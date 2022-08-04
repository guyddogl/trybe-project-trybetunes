import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import { createUser } from '../services/userAPI';
import logo from '../assets/images/logo.png';
import './login.css';

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
      await createUser({ name: userName });
      const { history } = this.props;
      history.push('/home');
    });
  }

  render() {
    const { isEnterButtonDisabled, isLoading } = this.state;
    return (
      <>
        <div className="b-vr" />
        <div className="container" data-testid="page-login">
          <div className="row justify-content-center align-items-center dashboard">
            {isLoading ? <Loading />
              : (
                <div className="col-10 col-md-4 rounded-3 login-container p-5">
                  <div
                    className="row justify-content-center align-items-center text-center"
                  >
                    <img src={ logo } className="logo me-3" alt="Logo" />
                    <span className="fs-4 title">
                      Trybe
                      <span className="fs-4 subtitle">Tunes</span>
                    </span>
                    <div className="input-group my-4">
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
                      type="button"
                      className="btn btn-success submit mt-2"
                      data-testid="login-submit-button"
                      disabled={ isEnterButtonDisabled }
                      onClick={ this.handleClick }
                    >
                      Enter
                    </button>
                  </div>
                </div>
              )}
          </div>
        </div>
      </>

    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
