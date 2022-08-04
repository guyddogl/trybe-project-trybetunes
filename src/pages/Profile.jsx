import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { getUser } from '../services/userAPI';
import Loading from '../components/Loading';
import Breadcrumb from '../components/Breadcrumb';

class Profile extends Component {
  state = {
    isLoading: false,
    dataUser: {},
  };

  componentDidMount() {
    this.setState({ isLoading: true }, async () => {
      const dataUser = await getUser();
      this.setState({
        dataUser,
        isLoading: false,
      });
    });
  }

  render() {
    const { isLoading, dataUser } = this.state;
    return (
      <>
        <Header />
        <div className="container-fluid" data-testid="page-profile">
          <div className="row justify-content-center align-items-center mt-3">
            <div className="col-12 col-md-8">
              <Breadcrumb icon="fas fa-user" route="Profile" />
              <hr />
            </div>
          </div>
          <br />
          <div className="row justify-content-center align-items-center mt-3">
            <div className="col-12 col-md-3">
              <div className="card p-4 shadow">
                {isLoading ? <Loading />
                  : (
                    <>
                      <div className="row justify-content-center align-items-center">
                        <div className="col-4 col-md-3">
                          <img
                            src={ dataUser.image }
                            alt={ dataUser.name }
                            data-testid="profile-image"
                            className="img-fluid mx-auto d-block img-list"
                          />
                        </div>
                        <div className="col-8 col-md-9">
                          <strong className="me-1">Name:</strong>
                          <span data-testid="header-user-name">{dataUser.name}</span>
                          <br />
                          <strong className="me-1">E-mail:</strong>
                          {dataUser.email}
                        </div>
                        <hr className="my-3" />
                      </div>
                      <div className="row justify-content-center align-items-center">
                        <div className="col-128 col-md-12">
                          <strong>Description:</strong>
                          <br />
                          {dataUser.description}
                          <br />
                          <Link to="/profile/edit">
                            <button
                              type="button"
                              className="btn btn-success theme-button mt-3"
                            >
                              <i className="fa-solid fa-user-pen me-2" />
                              Editar perfil
                            </button>
                          </Link>
                        </div>
                      </div>
                    </>
                  )}

              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Profile;
