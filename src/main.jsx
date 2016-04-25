import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { configureRoute } from './routes/configureRoute';

const hmrKey = Math.random();

const Main = ({ store, history }) => (
  <Provider store={store}>
    <Router key={hmrKey} history={history} routes={configureRoute} />
  </Provider>
);

Main.propTypes = {
  history: React.PropTypes.object.isRequired,
  store: React.PropTypes.object.isRequired,
};

export default Main;
