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
    for (const i of Object.keys(state)) {
      if (Iterable.isIterable(state[i])) {
        newState[i] = state[i].toJS();
      } else {
        newState[i] = state[i];
      }
    }
    return newState;
  },
});

export function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      thunk,
      logger
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers/index').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
