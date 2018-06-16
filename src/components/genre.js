import React, { Component } from 'react';
import { renderGenre } from '../actions/helper'

export default class Genre extends Component {

  filterGenre() {
    const { genres, currentGenre } = this.props
    let results = genres.filter(function (item, i) {
      return currentGenre.indexOf(item.id) !== -1
    })
    this.setState({ genre: results })
  }

  componentWillMount() {
    this.filterGenre()
  }

  render() {
    const { genre } = this.state
    return (
      <div>
        <h3>Genre </h3>  {renderGenre(genre)}
      </div>

    );
  }
}

