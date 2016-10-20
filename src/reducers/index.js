import { combineReducers } from 'redux';
import hwb from './hwb';
import location from './location';

const rootReducer = combineReducers({
  hwb,
  location,
});

export default rootReducer;
