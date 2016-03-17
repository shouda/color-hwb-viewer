import hwb from './hwb';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  hwb,
  routing: routerReducer,
});

export default rootReducer;
