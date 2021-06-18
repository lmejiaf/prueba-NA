import {
  FETCH_MOVIES,
  FETCH_MOVIES_CLEAN,
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIES_SUCCESS,
} from './actionTypes';

const initialState = {
  loading: false,
  pageNumber: 1,
  movies: [],
  total: 0,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        pageNumber:
          action.payload.pageNumber < 1
            ? state.pageNumber
            : action.payload.pageNumber,
        loading: true,
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload.data.Search,
        total: action.payload.data.totalResults,
        loading: false,
      };
    case FETCH_MOVIES_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    case FETCH_MOVIES_CLEAN:
      return {
        ...state,
        error: null,
        loading: false,
      };
    default:
      return {...state};
  }
};
