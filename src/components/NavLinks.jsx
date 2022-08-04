import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';
import user from '../assets/images/user.png';

class NavLinks extends Component {
  state = {
    isLoading: false,
    userName: '',
  };

  componentDidMount() {
    this.setState({ isLoading: true }, async () => {
      const dataUser = await getUser();
      this.setState({
        userName: dataUser.name,
        isLoading: false,
      });
    });
  }

  render() {
    const { isLoading, userName } = this.state;
    return (
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link
            to="/home"
            className="nav-link text-white d-none d-md-block"
          >
            <i className="fas fa-home me-2" />
            Home
          </Link>
          <Link to="/home" className="nav-link text-white d-block d-md-none">
            <i className="fas fa-home me-2" />
          </Link>
        </li>
        <li>
          <Link
            to="/search"
            data-testid="link-to-search"
            className="nav-link text-white d-none d-md-block"
          >
            <i className="fas fa-search me-2" />
            Search
          </Link>
          <Link to="/search" className="nav-link text-white d-block d-md-none">
            <i className="fas fa-search me-2" />
          </Link>
        </li>
        <li>
          <Link
            to="/favorites"
            data-testid="link-to-favorites"
            className="nav-link text-white d-none d-md-block"
          >
            <i className="fas fa-star me-2" />
            Favorites
          </Link>
          <Link to="/favorites" className="nav-link text-white d-block d-md-none">
            <i className="fas fa-star me-2" />
          </Link>
        </li>
        <li>
          <span className="nav-link text-white text-muted d-none d-md-block">
            <i className="fas fa-music me-2" />
            Playlists
          </span>
          <span className="nav-link text-white text-muted d-block d-md-none">
            <i className="fas fa-music me-2" />
          </span>
        </li>
        <li>
          <span className="nav-link text-white text-muted d-none d-md-block">
            <i className="fas fa-microphone-alt me-2" />
            Podcasts
          </span>
          <span className="nav-link text-white text-muted d-block d-md-none">
            <i className="fas fa-microphone-alt me-2" />
          </span>
        </li>
        <hr className="mt-4" />
        <li>
          <Link
            to="/profile"
            data-testid="link-to-profile"
            className="d-flex nav-link text-white user-profile-bg"
          >
            <img
              src={ user }
              alt="profile"
              className="user-img rounded-circle me-2 d-none d-md-block"
            />
            <i className="fas fa-user-alt me-2 d-md-none" />
            <span
              className="user d-none d-md-block"
              data-testid="header-user-name"
            >
              {/* {isLoading ? <Loading /> : userName} */}
              guyddo
            </span>
          </Link>
        </li>
        <li>
          <span
            className="d-flex align-items-center nav-link user-profile-bg"
          >
            <i className="fas fa-sign-out-alt mx-md-2" />
            <span className="user d-none d-md-block">logout</span>
          </span>
        </li>
      </ul>
    );
  }
}

export default NavLinks;
