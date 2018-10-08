import {
  GET_MOVIE_INFO,
  GET_MOVIE_INFO_SUCCESS,
  GET_MOVIE_INFO_FAIL,
  GET_MOVIES,
  GET_MOVIES_FAIL,
  GET_MOVIES_SUCCESS
} from '../actions/actionTypes';

const initalState = {
  movies: []
};

export default (state = initalState, action) => {
  switch (action.type){
    case GET_MOVIES:
      return {
        ...state,
        loadingInfo: true
      };
    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        loadingInfo: false,
        movies: action.payload.data.Search
      };
    case GET_MOVIES_FAIL:
      return {
        ...state,
        loadingInfo: false,
        error: 'Error while fetching movies'
      };
    case GET_MOVIE_INFO:
      return {
        ...state,
        loadingInfo: true
      };
    case GET_MOVIE_INFO_SUCCESS:
      return {
        ...state,
        loadingInfo: false,
        movieInfo: action.payload.data
      };
    case GET_MOVIE_INFO_FAIL:
      return {
        ...state,
        loadingInfo: false,
        error: 'Error getting movie info'
      };
    default:
      return state;
  }
};
