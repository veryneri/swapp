import RootReducer from '../root';
import {
  GET_MOVIES,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAIL,
  GET_MOVIE_INFO,
  GET_MOVIE_INFO_SUCCESS,
  GET_MOVIE_INFO_FAIL,
} from '../../actions/actionTypes';
// import { apiKey } from '../../../config/omdb';

describe('root reducer', () => {
  it('should return the initial state', () => {
    expect(RootReducer(undefined, {})).toEqual({
      movies: []
    });
  });

  it(`should handle ${GET_MOVIES}`, () => {
    expect(
      RootReducer(undefined, {
        type: GET_MOVIES
      })
    ).toEqual({
      loadingInfo: true,
      movies: []
    });
  });

  it(`should handle ${GET_MOVIES_SUCCESS}`, () => {
    expect(
      RootReducer(undefined, {
        type: GET_MOVIES_SUCCESS,
        payload: {
          data: {
            Search: [
              {
                imdbID: 'ttttttttt',
                Title: 'Lorem ipsum dolor'
              }
            ]
          }
        }
      })
    ).toEqual({
      loadingInfo: false,
      movies: [
        {
          imdbID: 'ttttttttt',
          Title: 'Lorem ipsum dolor'
        }
      ]
    });
  });

  it(`should handle ${GET_MOVIES_FAIL}`, () => {
    expect(
      RootReducer(undefined, {
        type: GET_MOVIES_FAIL
      })
    ).toEqual({
      error: 'Error while fetching movies',
      loadingInfo: false,
      movies: []
    });
  });

  it(`should handle ${GET_MOVIE_INFO}`, () => {
    expect(
      RootReducer(undefined, {
        type: GET_MOVIE_INFO
      })
    ).toEqual({
      loadingInfo: true,
      movies: []
    });
  });

  it(`should handle ${GET_MOVIE_INFO_SUCCESS}`, () => {
    expect(
      RootReducer(undefined, {
        type: GET_MOVIE_INFO_SUCCESS,
        payload: {
          data: {
            imdbID: 'ttttttttt',
            Title: 'Lorem ipsum dolor'
          }
        }
      })
    ).toEqual({
      loadingInfo: false,
      movieInfo: {
        imdbID: 'ttttttttt',
        Title: 'Lorem ipsum dolor'
      },
      movies: []
    });
  });

  it(`should handle ${GET_MOVIE_INFO_FAIL}`, () => {
    expect(
      RootReducer(undefined, {
        type: GET_MOVIE_INFO_FAIL
      })
    ).toEqual({
      error: 'Error getting movie info',
      loadingInfo: false,
      movies: []
    });
  });
});
