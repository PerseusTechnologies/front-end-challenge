import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Autosuggest from 'react-autosuggest'
import { URL_SEARCH } from '../const';
import './search.css'
import axios from 'axios'
import { formatDate } from '../actions/helper'
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };




  getSuggestionValue = (suggestion) => {
    return suggestion.title;
  };

  onSuggestionsFetchRequested = ({ value }) => {
    const trimmedValue = value.trim();
    if (trimmedValue.length > 0) {
      let url = URL_SEARCH + trimmedValue;
      axios.get(url)
        .then((response) => {
          let MovieList = [];
          MovieList.push(response.data)
          this.setState({
            suggestions: MovieList
          });
        }).catch(error => console.log('error ', error))


    }
    else {
      this.setState({
        suggestions: []
      })
    }
  }

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  renderSuggestion = (suggestion) => {
    return (
      <a>
        <img className="searchResult-image" alt='poster' src={suggestion.full_poster_path} />
        <div className="searchResult-text">
          <div className="searchResult-name">
            {suggestion.original_title}
          </div>
          {formatDate(suggestion.release_date, 'YYYY', '0000')}
        </div>
      </a>
    );
  };

  onSuggestionSelected = (event, { suggestion, method }) => {
    if (method === 'enter')
      event.preventDefault();
    this.props.dispatch(push({
      pathname: `/movie/${suggestion.title}`,
      state: { detail: suggestion }
    }))
    this.setState({ value: '' });
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      value,
      onChange: this.onChange,
      onKeyPress: this.handleKeyDown,
      placeholder: 'Search Movie Title...'
    };

    return (
      <div className='mainDiv'>
        <h2 className='heading'> Enter Movie's Title and select your desired movies from list.</h2>
        <Autosuggest
          className='searchBar'
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionSelected={this.onSuggestionSelected}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps} />
      </div>

    );

  }
}




export default connect()(SearchBar);
