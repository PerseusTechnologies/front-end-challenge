import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/moviePreview.css'

const MoviePreview = (props) => {
  return (
    <Link 
      className="link-decoration"
      to={{
        pathname: '/movie',
        state: { 
          movie: props.movie,
          movies: props.movies
        }
      }}
    >
      <div className="wrapper">
        <div className="container">
          <span>
            <img className="image-container" src={props.movie.full_backdrop_path} alt=""/>
          </span>
          <span className="title-desc">
            <p>Title: <strong>{props.movie.title}</strong></p>
            <span>{props.movie.overview}</span>
          </span>
        </div>
      </div>
    </Link>
  )
}

export default MoviePreview