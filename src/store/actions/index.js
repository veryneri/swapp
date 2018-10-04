import { apiKey } from '../../config/omdb';
import {
  GET_MOVIE_INFO,
  GET_MOVIES
} from './actionTypes';

export function getMovieDetail(imdbIB) {
  return {
    type: GET_MOVIE_INFO,
    payload: {
      request: {
        url: `/?i=${ imdbIB }&apikey=${ apiKey }`
      }
    }
  };
}

export function listMovies() {
  return {
    type: GET_MOVIES,
    payload: {
      request: {
        url: `/?s=star%20wars&apikey=${ apiKey }`
      }
    }
  };
}
