import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Hwb from '../containers/Hwb';

const App = () => (
  <Router>
    <div>
      <div className="clearfix mx-auto" style={{ width: '13em' }}>
        <h2>HWB Color Space</h2>
      </div>
      <div className="clearfix mx-auto" style={{ width: '90%' }}>
        <Switch>
          <Route path="/" exact component={Hwb} />
          <Route path="/picked/:hex" component={Hwb} />
          <Route component={Hwb} />
        </Switch>
      </div>
    </div>
  </Router>
);

export default App;
