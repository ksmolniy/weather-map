import { createAction, createReducer } from 'redux-act'

const initialState = {
  loading: false,
  error: false,
  list: [],
};

export const weatherFetch = createAction('WEATHER_FETCH');
export const weatherRequest = createAction('WEATHER_REQUEST');
export const weatherRequestSucces = createAction('WEATHER_REQUEST_SUCCES');
export const weatherRequestFailed = createAction('WEATHER_REQUEST_FAILED');


export default createReducer({
  [weatherFetch] : () => ({ ...initialState, loading: true }),
  [weatherRequestFailed] : () => ({ ...initialState, error: true }),
  [weatherRequestSucces] : (state, payload) => ({ ...initialState, list: payload}),
}, initialState)
