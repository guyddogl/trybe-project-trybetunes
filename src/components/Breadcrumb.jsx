import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Breadcrumb extends Component {
  render() {
    const { icon, route } = this.props;
    return (
      <nav className="theme-color">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">Home</li>
          <li className="breadcrumb-item">
            <i className={ `${icon} me-2` } />
            {`${route}`}
          </li>
        </ol>
      </nav>
    );
  }
}

Breadcrumb.propTypes = {
  icon: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};

export default Breadcrumb;
