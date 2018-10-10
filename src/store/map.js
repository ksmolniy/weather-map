import { createAction, createReducer } from 'redux-act';

const initialState = {
  width: window.innerWidth,
  height: window.innerHeight,
  latitude: 48.137,
  longitude: 11.5752,
  zoom: 8,
}

export const mapViewChanged = createAction('MAP_CHANGED');

export default createReducer({
  [mapViewChanged]: (state, payload) => ({ ...state, ...payload }),
}, initialState);
