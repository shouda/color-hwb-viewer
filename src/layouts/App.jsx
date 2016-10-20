import React from 'react';
import { HashRouter, Match, Miss } from 'react-router';
import Hwb from '../containers/Hwb';

const App = () => (
  <HashRouter>
    <div>
      <div className="clearfix mx-auto" style={{ width: '13em' }}>
        <h2>HWB Color Space</h2>
      </div>
      <div className="clearfix mx-auto" style={{ width: '90%' }}>
        <Match pattern="/" exactly component={Hwb} />
        <Match pattern="/picked/:hex" component={Hwb} />
        <Miss component={Hwb} />
      </div>
    </div>
  </HashRouter>
);

export default App;
