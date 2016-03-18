import './css/main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { configureStore } from './stores/configureStore';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

import App from './layouts/App';
import Hwb from './containers/Hwb';

const routes = (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Hwb} />
      <Route path="picked" component={Hwb}>
        <Route path="/picked/:hex" component={Hwb} />
      </Route>
      <Route path="*" component={Hwb} />
    </Route>
  </Router>);

const rootElement = document.querySelector('#app');

let render = () => {
  ReactDOM.render((
    <Provider store={store}>
      {routes}
    </Provider>
  ), rootElement);
};

if (module.hot) {
  // Support hot reloading of components
  // and display an overlay for runtime errors
  const renderApp = render;
  const renderError = (error) => {
    const RedBox = require('redbox-react');
    ReactDOM.render((
      <RedBox error={error} />
    ), rootElement);
  };
  render = () => {
    try {
      renderApp();
    } catch (error) {
      renderError(error);
    }
  };
  module.hot.accept('./layouts/App', () => {
    setTimeout(render);
  });
}

render();

document.querySelector('#loading').style.cssText = 'transition: 0.5s; opacity: 0';
window.setTimeout(() => {
  document.querySelector('#loading').style.cssText = 'display: none';
  document.querySelector('#app').style.cssText = 'transition: 1s; opacity: 1';
}, 500);
