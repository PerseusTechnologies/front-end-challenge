import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import {
    FETCH_MOVIE,
    FETCH_MOVIE_SUCCESS,
    FETCH_MOVIE_FAILURE,
    FETCH_GENRE_SUCCESS,
    FETCH_GENRE_FAILURE,
    FETCH_TRAILER_FAILURE,
    FETCH_TRAILER_SUCCESS

} from '../actions'


const initialState = {
    isFetching: false,
    isGenreFetching: true,
    movie: {},
    error: {},
    genres: [],
    trailer: ''
};

const movieDetail = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIE:
            return Object.assign({}, state, {
                isFetching: true
            });
        case FETCH_MOVIE_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                movie: action.data.data
            });
        case FETCH_MOVIE_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                error: action.data
            });

        case FETCH_GENRE_SUCCESS:
            return Object.assign({}, state, {
                isGenreFetching: false,
                genres: action.data.data.genres
            });
        case FETCH_GENRE_FAILURE:
            return Object.assign({}, state, {
                isGenreFetching: false,
                error: action.data
            });
        case FETCH_TRAILER_SUCCESS:
            let youtubeLink = action.data.data.results[0].key
            return Object.assign({}, state, {
                isFetching: false,
                trailer: youtubeLink
            });
        case FETCH_TRAILER_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                error: action.data
            });

        default:
            return state;
    }
};




const movieApp = combineReducers({
    movieDetail,
    routing: routerReducer
});

export default movieApp;