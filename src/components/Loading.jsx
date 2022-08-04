import React, { Component } from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';

class Header extends Component {
  render() {
    return (
      <div align="center">
        <span className="carregando">Carregando...</span>
        <ScaleLoader
          color="#2fc18c"
          height={ 70 }
          margin={ 5 }
          width={ 10 }
        />
      </div>
      // <center>
      //   <div className="spinner-border text-success">
      //     <span className="visually-hidden">Carregando...</span>
      //   </div>
      // </center>
    );
  }
}

export default Header;
