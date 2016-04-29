import React from 'react';
import { Provider } from 'react-redux';
import getRouter from './routes/configureRoute';

const Main = ({ store, history }) => (
  <Provider store={store}>
    {getRouter(history)}
  </Provider>
);

Main.propTypes = {
  history: React.PropTypes.object.isRequired,
  store: React.PropTypes.object.isRequired,
};

export default Main;
