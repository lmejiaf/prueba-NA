import {
  FETCH_MOVIES,
  FETCH_MOVIES_CLEAN,
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIES_SUCCESS,
} from './actionTypes';

export function fetchMovies(pageNumber) {
  return {
    type: FETCH_MOVIES,
    payload: {
      pageNumber,
    },
  };
}
export function fetchMoviesSuccess(data) {
  return {
    type: FETCH_MOVIES_SUCCESS,
    payload: {
      data,
    },
  };
}
export function fetchMoviesFailure(error) {
  return {
    type: FETCH_MOVIES_FAILURE,
    payload: {
      error,
    },
  };
}
export function fetchMoviesClean() {
  return {
    type: FETCH_MOVIES_CLEAN,
    payload: {},
  };
}
