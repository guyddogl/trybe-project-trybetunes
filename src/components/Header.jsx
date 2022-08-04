import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';
import './sidebar.css';
import logo from '../assets/images/logo.png';

class Header extends Component {
  render() {
    return (
      <>
        <header
          className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar"
          data-testid="header-component"
        >
          <Link
            to="/home"
            className="d-flex align-items-center mb-3 mb-md-0 text-decoration-none"
          >
            <img src={ logo } className="logo me-3" alt="Logo" />
            <span className="fs-4 title d-none d-md-block">Trybe</span>
            <span className="fs-4 subtitle d-none d-md-block">Tunes</span>
          </Link>
          <span
            className="title d-md-none"
          >
            Trybe
            <span className="subtitle d-md-none">Tunes</span>
          </span>
          <hr />
          <NavLinks />
        </header>
        <div className="fixed-sidebar" />
        <div className="b-divider b-vr" />
      </>
    );
  }
}

export default Header;
