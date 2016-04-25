import React from 'react';

const App = ({ children }) => (
  <div>
    <div className="clearfix mx-auto" style={{ width: '13em' }}>
      <h2>HWB Color Space</h2>
    </div>
    <div className="clearfix mx-auto" style={{ width: '90%' }}>
      {children}
    </div>
  </div>
);

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
