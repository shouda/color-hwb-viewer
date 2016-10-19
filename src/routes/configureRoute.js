import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from '../layouts/App';
import Hwb from '../containers/Hwb';

/* eslint-disable react/jsx-filename-extension */
function getRoute() {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Hwb} />
      <Route path="picked" component={Hwb}>
        <Route path="picked/:hex" component={Hwb} />
      </Route>
      <Route path="*" component={Hwb} />
    </Route>
  );
}

export default function getRouter(history) {
  return (
    <Router history={history}>
      {getRoute()}
    </Router>
  );
}
