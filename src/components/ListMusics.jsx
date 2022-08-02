import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { getMusics } from '../services/musicsAPI';

class ListMusics extends Component {
  state = {
    listOfMusics: [],
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    console.log(id);
    // const response = await getMusics(id);
    // const object = await response.json();

    // this.setState({
    //   listOfMusics: object.exercises,
    // });
  }

  render() {
    // const { match: { params: { id } } } = this.props;
    console.log('this.props');
    const { listOfMusics } = this.state;
    return (
      <div>
        <ul>
          { listOfMusics.map((music) => <li key={ music }>{ music }</li>) }
        </ul>
      </div>
    );
  }
}

ListMusics.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ListMusics;
