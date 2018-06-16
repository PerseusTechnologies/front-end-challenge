import { URL_SEARCH } from '../const';
import axios from 'axios'
import {TMDB_API, API_KEY} from '../const'

// action types
export const FETCH_MOVIE = 'FETCH_MOVIE';
export const FETCH_MOVIE_SUCCESS = 'FETCH_MOVIE_SUCCESS';
export const FETCH_MOVIE_FAILURE = 'FETCH_MOVIE_FAILURE';
export const FETCH_GENRE_SUCCESS = 'FETCH_GENRE_SUCCESS';
export const FETCH_GENRE_FAILURE = 'FETCH_GENRE_FAILURE';
export const FETCH_TRAILER_SUCCESS = 'FETCH_TRAILER_SUCCESS';
export const FETCH_TRAILER_FAILURE = 'FETCH_TRAILER_FAILURE';



function fetchMovie() {

    return {
        type: FETCH_MOVIE
    };
}

function fetchMovieSuccess(data) {
    return {
        type: FETCH_MOVIE_SUCCESS,
        data
    };
}

function fetchMovieFail(error) {
    return {
        type: FETCH_MOVIE_FAILURE,
        error
    };
}

function fetchGenreSuccess(data) {
    return {
        type: FETCH_GENRE_SUCCESS,
        data
    };
}

function fetchGenreFail(error) {
    return {
        type: FETCH_GENRE_FAILURE,
        error
    };
}

function fetchTrailerSuccess(data) {
    return {
        type: FETCH_TRAILER_SUCCESS,
        data
    };
}

function fetchTrailerFail(error) {
    return {
        type: FETCH_TRAILER_FAILURE,
        error
    };
}


// fetch movie page data
export function fetchMovieDetail(title) {
    return function(dispatch) {
        dispatch(fetchMovie())
        const trimmedValue = title.trim();
        if (trimmedValue.length > 0) {
            let url = URL_SEARCH + trimmedValue;
            axios.get(url)
                .then((response) => {
                    dispatch(fetchMovieSuccess(response))
                }).catch(error => dispatch(fetchMovieFail(error)))
        }
    }
}

// fetch movie genre 
export function fetchGenre() {
    return function(dispatch) {
            let url = TMDB_API + 'genre/movie/list?api_key=' + API_KEY;
            axios.get(url)
                .then((response) => {
                    dispatch(fetchGenreSuccess(response))
                }).catch(error => dispatch(fetchGenreFail(error)))
    }
}

// fetch movie trailer 
export function fetchTrailer(id) {
    console.log(id)
    return function(dispatch) {
            let url = `${TMDB_API}movie/${id}/videos?api_key=${API_KEY}`
            console.log(id, url, 'trail')
            axios.get(url)
                .then((response) => {
                    dispatch(fetchTrailerSuccess(response))
                }).catch(error => dispatch(fetchTrailerFail(error)))
    }
}