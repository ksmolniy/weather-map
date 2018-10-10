import { createAction, createReducer } from 'redux-act'

const initialState = [];

export const weatherFetch = createAction('WEATHER_FETCH');
export const weatherRequest = createAction('WEATHER_REQUEST');
export const weatherRequestSucces = createAction('WEATHER_REQUEST_SUCCES');
export const weatherRequestFailed = createAction('WEATHER_REQUEST_FAILED');


export default createReducer({
  [weatherRequestSucces] : (state, payload) => payload,
}, initialState)
