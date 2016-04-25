import './css/main.css';
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

const Main = ({ store, history, configureRoute }) => (
  <Provider store={store}>
    <Router history={history} routes={configureRoute} />
  </Provider>
);

Main.propTypes = {
  history: React.PropTypes.object.isRequired,
  configureRoute: React.PropTypes.object.isRequired,
  store: React.PropTypes.object.isRequired,
};

export default Main;
