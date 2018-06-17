import React, { Component } from 'react'
import MoviePreview from './moviePreview'
import Header from './headerLayout'
import '../main.css'

class Main extends Component {
  constructor (props) {
    super(props)
    this.state = { 
      title: '',
      movies: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    this.props.location.state && this.setState({ movies: this.props.location.state.movies })
  } 
  
  handleChange(event) {
    this.setState({ title: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.fetchMovieData(this.state.title)
  }  

  fetchMovieData = async (searchPartial) => {
    const response = await fetch(`https://sbot-fe-test.herokuapp.com/api/v1/movies?query=${searchPartial}`)
    const movie = await response.json()
    const movies = this.state.movies
    movies.unshift(movie)
    this.setState({ movies })
  }

  render() {
    const movies = [...this.state.movies]
    const renderMovies = movies.map((element, index) => {
      return (<MoviePreview movie={element} key={index} movies={movies} />)
    })

    return (
      <div className="App">
        <Header main={true}/>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col">
              <input 
                className="searchInput"
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
                required 
              />
              <button className="button" type="submit" value="Search">
                Search
              </button>
            </div>
          </div>
        </form>

        {renderMovies.length > 0 && renderMovies}
      </div>
    )
  }
}

export default Main
