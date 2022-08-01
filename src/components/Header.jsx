import React, { Component } from 'react';
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
              <span data-testid="header-user-name">{userName}</span>
            </header>
          )}
      </div>
    );
  }
}

export default Header;
