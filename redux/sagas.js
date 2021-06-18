import {call, put, all, takeEvery} from 'redux-saga/effects';
import {fetchMovies} from '../api/servicios';
import {fetchMoviesFailure, fetchMoviesSuccess} from './actions';
import {FETCH_MOVIES} from './actionTypes';

function* buscarPeliculasConLove({payload}) {
  try {
    let data = yield call(fetchMovies, payload.pageNumber);
    if (data.Error) {
      yield put(fetchMoviesFailure(data.Error));
    } else {
      yield put(fetchMoviesSuccess(data));
    }
  } catch (error) {
    yield put(fetchMoviesFailure(error));
  }
}

export default function* rootSaga() {
  yield all([takeEvery(FETCH_MOVIES, buscarPeliculasConLove)]);
}
