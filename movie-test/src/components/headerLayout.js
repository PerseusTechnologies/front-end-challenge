import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import '../main.css'

const Header = (props) => {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">
          <Link 
            className="link-decoration" 
            to={{
              pathname: '/',
              state: { movies: props.movies }
            }}
          >
            Movie directory!
          </Link>
        </h1>
      </header>
      {props.main && 
        <p className="App-intro">
          Type the name (or part of it) of the Movie you want to find.
        </p>
      }
    </div>
  )
}

export default Header
