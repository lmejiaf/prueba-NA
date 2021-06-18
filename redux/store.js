import {createStore, applyMiddleware, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';
import reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    moviesReducer: reducers,
  }),
  applyMiddleware(sagaMiddleware),
);
export default store;
sagaMiddleware.run(sagas);
