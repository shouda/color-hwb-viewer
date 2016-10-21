import { Map } from 'immutable';

/* eslint-env browser */
const initialLocation = Map({
  path: window.location.hash,
});
const locationReducer = (state = initialLocation, action) => (
  action.type === 'LOCATION_CHANGE' ? state.setIn(['path'], action.location) : state
);

export default locationReducer;
