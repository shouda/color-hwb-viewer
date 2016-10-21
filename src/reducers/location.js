import { Map } from 'immutable';
import {
  LOCATION_CHANGE,
  LOCATION_SYNC,
 } from '../actions/hwb';

/* eslint-env browser */
const initialLocation = Map({
  path: (window.location.hash === '') ? '/' : window.location.hash.replace('#', ''),
});
const locationReducer = (state = initialLocation, action) => {
  switch (action.type) {
    case LOCATION_CHANGE:
      return state.setIn(['path'], action.location);
    case LOCATION_SYNC:
      return state.setIn(['path'], action.location);
    default:
      return state;
  }
};

export default locationReducer;
