import React from 'react';

function IndicatorItem({ id, hue, indicator }) {
  const str = (id === hue) ? indicator : ' ';
  return (
    <div className="left" style={{ width: '2px', fontSize: '2px' }}>{str}</div>
  );
}

IndicatorItem.propTypes = {
  hue: React.PropTypes.number.isRequired,
  id: React.PropTypes.number.isRequired,
  indicator: React.PropTypes.string.isRequired,
};

export default IndicatorItem;
