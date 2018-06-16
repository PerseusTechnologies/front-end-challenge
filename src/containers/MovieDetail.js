import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap/lib';
import { MovieInfo, Poster, ShowMessage } from '../components';
import { Genre, Trailer } from './'
import { connect } from 'react-redux';
import { fetchMovieDetail } from '../actions';

class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: this.props.location.state ? this.props.location.state.detail : false
    };
  }

  componentWillMount() {
    const { dispatch, location } = this.props;
    if (!location.state) {
      dispatch(fetchMovieDetail(this.props.params.title));
    }
  }



  render() {
    const { isFetching } = this.props;
    if (isFetching) {
      return <ShowMessage message='loading...' />
    }
    const movie = this.state.movie ? this.state.movie : this.props.movie
    if (movie.hasOwnProperty('id')) {
      return (
        <Grid fluid={false}>
          <Row>
            <Col xs={6} sm={6} md={6}>
              <Poster id={movie.id} path={movie.full_poster_path} responsive />
            </Col>
            <Col xs={12} sm={6} md={6}>
              <MovieInfo id={movie.id} movie={movie} />
              <Genre movie={movie} />
              <Trailer id={movie.id} />
            </Col>
          </Row>
        </Grid>
      );
    } else
      return <ShowMessage message='Something went wrong' />
  }
}

function mapStateToProps(state) {
  const { movieDetail } = state;
  const { isFetching, movie, error_movie } = movieDetail;
  return { isFetching, movie, error_movie }
}

export default connect(mapStateToProps)(MovieDetail);
