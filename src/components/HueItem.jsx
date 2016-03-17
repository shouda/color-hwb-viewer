import React from 'react';
import color from 'color2';

function HueItem({ hue, onSelectHue }) {
  const hex = color().hwb(hue, 0, 0).hexString();
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
