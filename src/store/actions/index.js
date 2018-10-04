import { apiKey } from '../../config/omdb';
import { GET_MOVIES } from './actionTypes';

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
