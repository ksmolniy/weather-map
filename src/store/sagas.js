import createSagaMiddleware, { takeLatest, delay } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { weatherFetch, weatherRequest, weatherRequestSucces, weatherRequestFailed } from './weather';
import { mapViewChanged } from './map';
import * as API from './api';

function* asyncWeatherFetch(action) {
  yield call(delay, 800);

  if (!action.payload) {
    yield put(weatherRequestSucces([]));
    return;
  }

  try {
    yield put(weatherRequest());

    const data = yield call(API.get, `forecast?q=${action.payload}`);

    const weather = data.list.map(item => ({
      weather: item.weather[0].main,
      temp: item.main.temp - 273.15,
      dateTime: item.dt_txt,
      dt: item.dt*1000,
    }));

    yield put(weatherRequestSucces(weather));
    yield put(mapViewChanged({
      latitude: data.city.coord.lat,
      longitude: data.city.coord.lon,
    }));
  } catch (e) {
    yield put(weatherRequestFailed());
  }
}

function* watchFetchWeather() {
  yield takeLatest(weatherFetch, asyncWeatherFetch);
}

const sagaMiddleware = createSagaMiddleware();

export function runWatchers() {
  sagaMiddleware.run(watchFetchWeather);
}

export default sagaMiddleware;
