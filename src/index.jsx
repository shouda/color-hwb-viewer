import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { configureStore } from './stores/configureStore';
import { configureRoute } from './routes/configureRoute';
import Main from './main';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);
const rootElement = document.querySelector('#app');

ReactDOM.render(
  <AppContainer
    component={Main}
    props={{ store, history, configureRoute }}
  />,
  rootElement
);

/* eslint-disable global-require */
if (module.hot) {
  module.hot.accept('./main', () => {
    ReactDOM.render(
      <AppContainer
        component={require('./main').default}
        props={{ store, history, configureRoute }}
      />,
      rootElement
    );
  });
}
/* eslint-enable global-require */

document.querySelector('#loading').style.cssText = 'transition: 0.5s; opacity: 0';
window.setTimeout(() => {
  document.querySelector('#loading').style.cssText = 'display: none';
  document.querySelector('#app').style.cssText = 'transition: 1s; opacity: 1';
}, 500);
