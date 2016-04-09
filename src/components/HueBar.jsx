import React from 'react';
import range from '../lib/range';

import HueItem from '../components/HueItem';

function HueBar({ hue, onSelectHue }) {
  const hues = range(0, 359);
  return (
    <div style={{ width: '90%' }} className="mx-auto">
      {hues.map(v => (
        <HueItem key={v} id={v} hue={hue} onSelectHue={onSelectHue} />
      ))}
    </div>
  );
}

HueBar.propTypes = {
  hue: React.PropTypes.number.isRequired,
  onSelectHue: React.PropTypes.func.isRequired,
};

export default HueBar;
