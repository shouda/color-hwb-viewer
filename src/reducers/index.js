import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import hwb from './hwb';

const rootReducer = combineReducers({
  hwb,
  routing: routerReducer,
});

export default rootReducer;
