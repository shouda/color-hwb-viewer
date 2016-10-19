import React from 'react';
import range from '../lib/range';

import HueItem from '../components/HueItem';

function HueBar({ origin, onSelectHue }) {
  const hues = range(0, 359);
  return (
    <div style={{ width: '90%' }} className="mx-auto">
      {hues.map(v => (
        <HueItem key={v} id={v} origin={origin} onSelectHue={onSelectHue} />
      ))}
    </div>
  );
}

HueBar.propTypes = {
  origin: React.PropTypes.objectOf(React.PropTypes.any).isRequired,
  onSelectHue: React.PropTypes.func.isRequired,
};

export default HueBar;
