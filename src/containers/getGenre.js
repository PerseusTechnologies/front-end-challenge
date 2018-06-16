import React, { Component } from 'react';
import { ShowMessage, Genre } from '../components';
import { connect } from 'react-redux';
import { fetchGenre } from '../actions';

class Genres extends Component {



  componentWillMount() {
    const { dispatch, id } = this.props;
    dispatch(fetchGenre(id));
  }



  render() {
    const {  genres, movie } = this.props;
    return (
      <div className='genre'>
        {this.props.genres.length ?
          <Genre currentGenre={movie.genre_ids} genres={genres} /> :
          <ShowMessage message='Something went wrong' />}
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { movieDetail } = state;
  const {  genres, error_movie } = movieDetail;
  return {  genres, error_movie }
}

export default connect(mapStateToProps)(Genres);
