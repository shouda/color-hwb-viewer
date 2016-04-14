import React from 'react';
import { getHex } from '../lib/color.js';

function ColorInfo({ hwb }) {
  const hwbArr = hwb.toArray();
  const hex = getHex(hwbArr);
  return (
    <div>
      <div className="clearfix" style={{ backgroundColor: hex }}> &nbsp; </div>
      <div className="clearfix py1">
        <div className="col col-6">Hue:</div>
        <div className="col col-6">{hwbArr[0]}</div>
      </div>
      <div className="clearfix py1">
        <div className="col col-6">Whiteness:</div>
        <div className="col col-6">{hwbArr[1]}</div>
      </div>
      <div className="clearfix py1">
        <div className="col col-6">Blackness:</div>
        <div className="col col-6">{hwbArr[2]}</div>
      </div>
      <div className="clearfix py1">
        <div className="col col-6">Hex:</div>
        <div className="col col-6">{hex}</div>
      </div>
    </div>
  );
}

ColorInfo.propTypes = {
  hwb: React.PropTypes.object.isRequired,
};

export default ColorInfo;
