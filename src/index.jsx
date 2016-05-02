import './css/main.css';
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { configureStore } from './stores/configureStore';
import Main from './main';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);
const rootElement = document.querySelector('#app');

function renderApp(RootComponent) {
  ReactDOM.render(
    <AppContainer>
      <RootComponent store={store} history={history} />
    </AppContainer>,
    rootElement
  );
}

renderApp(Main);

/* eslint-disable global-require */
if (module.hot) {
  module.hot.accept('./main', () => renderApp(require('./main').default));
}
/* eslint-enable global-require */

document.querySelector('#loading').style.cssText = 'transition: 0.5s; opacity: 0';
window.setTimeout(() => {
  document.querySelector('#loading').style.cssText = 'display: none';
  document.querySelector('#app').style.cssText = 'transition: 1s; opacity: 1';
}, 500);
