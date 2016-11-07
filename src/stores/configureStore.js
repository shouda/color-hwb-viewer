import { Iterable } from 'immutable';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

const logger = createLogger({
  /* eslint-disable no-unused-vars */
  predicate: (getState, action) => process.env.NODE_ENV === 'development',
  /* eslint-enable no-unused-vars */
  stateTransformer: (state) => {
    const newState = {};
    Object.keys(state).forEach((key) => {
      if (Iterable.isIterable(state[key])) {
        newState[key] = state[key].toJS();
      } else {
        newState[key] = state[key];
      }
    });
    return newState;
  },
});

const configureStore = (initialState) => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      thunk,
      logger,
    ),
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      /* eslint-disable global-require */
      const nextReducer = require('../reducers/index').default;
      /* eslint-enable global-require */
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};

export default configureStore;
