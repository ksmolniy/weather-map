import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';
import sagaMiddleware, { runWatchers } from './sagas';

const store = createStore(
  combineReducers(reducers),
  composeWithDevTools(
    applyMiddleware(sagaMiddleware),
  ),
);

runWatchers();

export default store;
