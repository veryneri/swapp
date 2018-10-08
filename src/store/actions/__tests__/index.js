import {
  getMovieDetail,
  listMovies
} from '..';
import {
  GET_MOVIE_INFO,
  GET_MOVIES
} from '../actionTypes';
import { apiKey } from '../../../config/omdb';

describe('movie actions', () => {
  it(`should return ${GET_MOVIE_INFO} action`, () => {
    expect(getMovieDetail('ttttt')).toEqual({
      type: GET_MOVIE_INFO,
      payload: {
        request: {
          url: `/?i=ttttt&apikey=${ apiKey }`
        }
      }
    });
  });

  it(`should return ${GET_MOVIES} action`, () => {
    expect(listMovies()).toEqual({
      type: GET_MOVIES,
      payload: {
        request: {
          url: `/?s=star%20wars&apikey=${ apiKey }`
        }
      }
    });
  });
});
