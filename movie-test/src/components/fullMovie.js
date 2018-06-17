import React, { Component } from 'react'
import Header from './headerLayout'
import '../main.css'

class FullMovie extends Component {
  constructor (props) {
    super(props)
    this.state = {
      movie: {}
    }
  }

  render () {
    const movie = this.props.location.state.movie

    return (
      <div className="App">
        <Header main={false} movies={this.props.location.state.movies} />
        <div className="wrapper">
          <div className="container">
            <span>
              <img className="image-container" src={movie.full_poster_path} alt=""/>
            </span>
            <span className="title-desc">
              <p>Title: <strong>{movie.title}</strong></p>
              <span>{movie.overview}</span>
              <p>Release date: {movie.release_date}</p>
              <p>Original Language: {movie.original_language}</p>
              <span>
                This movie has {movie.vote_count} vote(s) with an average of {movie.vote_average * 10}%
              </span>
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default FullMovie