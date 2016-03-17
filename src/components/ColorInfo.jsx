import React from 'react';
import color from 'color2';

function ColorInfo({ hwb }) {
  const hex = color().hwb(...hwb).hexString();
  return (
    <div>
      <div className="clearfix" style={{ backgroundColor: hex }}> &nbsp; </div>
      <div className="clearfix py1">
        <div className="col col-6">Hue:</div>
        <div className="col col-6">{hwb[0]}</div>
      </div>
      <div className="clearfix py1">
        <div className="col col-6">Whiteness:</div>
        <div className="col col-6">{hwb[1]}</div>
      </div>
      <div className="clearfix py1">
        <div className="col col-6">Blackness:</div>
        <div className="col col-6">{hwb[2]}</div>
      </div>
      <div className="clearfix py1">
        <div className="col col-6">Hex:</div>
        <div className="col col-6">{hex}</div>
      </div>
    </div>
  );
}

ColorInfo.propTypes = {
  hwb: React.PropTypes.array.isRequired,
};

export default ColorInfo;
