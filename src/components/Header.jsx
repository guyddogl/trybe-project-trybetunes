import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import { getUser } from '../services/userAPI';

class Header extends Component {
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
      <div>
        {isLoading ? <Loading />
          : (
            <header
              data-testid="header-component"
            >
              <ul>
                <li>
                  <Link to="/search" data-testid="link-to-search">Search</Link>
                </li>
                <li>
                  <Link to="/favorites" data-testid="link-to-favorites">Favorites</Link>
                </li>
                <li>
                  <Link to="/profile" data-testid="link-to-profile">Profile</Link>
                </li>
              </ul>
              <span data-testid="header-user-name">{userName}</span>
            </header>
          )}
      </div>
    );
  }
}

export default Header;
