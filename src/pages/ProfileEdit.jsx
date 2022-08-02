import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { getUser, updateUser } from '../services/userAPI';
import Loading from '../components/Loading';

class Profile extends Component {
  state = {
    isLoading: false,
    name: '',
    email: '',
    description: '',
    image: '',
    isSaveButtonDisabled: true,
  };

  componentDidMount() {
    this.setState({ isLoading: true }, async () => {
      const dataUser = await getUser();
      this.setState({
        name: dataUser.name,
        email: dataUser.email,
        description: dataUser.description,
        image: dataUser.image,
        isLoading: false,
      });
    });
  }

  validateTextInputs = ({ name, email, description, image } = this.state) => {
    const arrayInputs = [name, email, description, image];
    return arrayInputs.some((input) => input.length === 0);
  }

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, () => {
      this.setState({ isSaveButtonDisabled: this.validateTextInputs() });
    });
  }

  handleClickSave = async () => {
    const { name, email, description, image } = this.state;
    const profileEdit = {
      name,
      email,
      description,
      image,
    };
    await updateUser(profileEdit);
    const { history } = this.props;
    history.push('/profile');
  }

  render() {
    const {
      isLoading,
      name,
      email,
      description,
      image,
      isSaveButtonDisabled,
    } = this.state;
    return (
      <>
        <Header />
        <div data-testid="page-profile-edit">
          Profile
          <br />
          {isLoading ? <Loading />
            : (
              <form>
                <input
                  type="text"
                  name="name"
                  value={ name }
                  className="form-control input"
                  data-testid="edit-input-name"
                  onChange={ (e) => this.onInputChange(e) }
                />
                <input
                  type="email"
                  name="email"
                  value={ email }
                  className="form-control input"
                  data-testid="edit-input-email"
                  onChange={ (e) => this.onInputChange(e) }
                />
                <input
                  type="text"
                  name="description"
                  value={ description }
                  className="form-control input"
                  data-testid="edit-input-description"
                  onChange={ (e) => this.onInputChange(e) }
                />
                <input
                  type="text"
                  name="image"
                  value={ image }
                  className="form-control input"
                  data-testid="edit-input-image"
                  onChange={ (e) => this.onInputChange(e) }
                />
                <button
                  type="button"
                  className="btn btn-success submit mt-2"
                  data-testid="edit-button-save"
                  disabled={ isSaveButtonDisabled }
                  onClick={ this.handleClickSave }
                >
                  Editar perfil
                </button>
              </form>
            )}
        </div>
      </>
    );
  }
}

Profile.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Profile;
