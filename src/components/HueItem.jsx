import React from 'react';
import { getHex } from '../lib/color.js';

function HueItem({ hue, onSelectHue }) {
  const hex = getHex([hue, 0, 0]);
  const handleClick = () => onSelectHue(hue);
  return (
    <div
      className="left"
      style={{ width: '2px', backgroundColor: hex }}
      onClick={handleClick}
    >
      &nbsp;
    </div>
  );
}

HueItem.propTypes = {
  hue: React.PropTypes.number.isRequired,
  onSelectHue: React.PropTypes.func.isRequired,
};

export default HueItem;
