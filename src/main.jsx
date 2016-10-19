import React from 'react';
import { Provider } from 'react-redux';
import getRouter from './routes/configureRoute';

const Main = ({ store, history }) => (
  <Provider store={store}>
    {getRouter(history)}
  </Provider>
);

Main.propTypes = {
  history: React.PropTypes.objectOf(React.PropTypes.any).isRequired,
  store: React.PropTypes.objectOf(React.PropTypes.any).isRequired,
};

export default Main;
