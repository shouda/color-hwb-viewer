import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import './css/main.css';
import App from './layouts/App';

const store = configureStore();
const rootElement = document.querySelector('#app');

function renderApp(RootComponent) {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <RootComponent />
      </Provider>
    </AppContainer>,
    rootElement,
  );
}

renderApp(App);

/* eslint-disable global-require */
if (module.hot) {
  module.hot.accept('./layouts/App', () => renderApp(require('./layouts/App').default));
}
/* eslint-enable global-require */

/* eslint-env browser */
document.querySelector('#loading').style.cssText = 'transition: 0.5s; opacity: 0';
window.setTimeout(() => {
  document.querySelector('#loading').style.cssText = 'display: none';
  document.querySelector('#app').style.cssText = 'transition: 1s; opacity: 1';
}, 500);
