import React from 'react';
import { getHex } from '../lib/color.js';

function HueItem({ id, origin, onSelectHue }) {
  const hex = getHex([id, 0, 0]);
  const hwb = origin.toArray();
  const str = (id === hwb[0]) ? '\u2758' : '\u202f';
  const handleClick = () => onSelectHue(id);
  return (
    <div
      className="left"
      style={{ width: '0.2777%',
               height: '1.5rem',
               fontSize: '1px',
               textAlign: 'center',
               backgroundColor: hex,
            }}
      onClick={handleClick}
    >
      {str}
    </div>
  );
}

HueItem.propTypes = {
  id: React.PropTypes.number.isRequired,
  origin: React.PropTypes.object.isRequired,
  onSelectHue: React.PropTypes.func.isRequired,
};

export default HueItem;
