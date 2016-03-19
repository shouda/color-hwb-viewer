import React from 'react';
import { getHex, pickedPushToUrl } from '../lib/color.js';

function PickedItem({ index, picked, hwb, onAdjustColor, onDeleteColor }) {
  const handleAdjust = () => onAdjustColor(hwb);
  const handleDelete = () => {
    onDeleteColor(index);
    pickedPushToUrl(picked.filter((_, i) => i !== index));
  };
  const hex = getHex(hwb);
  return (
    <div
      className="col col-3 my2"
    >
      <div className="px1">
        <div style={{ backgroundColor: hex }}>&nbsp;</div>
      </div>
      <div className="my1 h6 clearfix">
        <div className="col col-3">
          <button
            className="btn btn-small btn-outline"
            onClick={handleAdjust}
          >&#x2191;</button>
        </div>
        <div className="col col-6">
          hwb({hwb[0]}, {hwb[1]}, {hwb[2]})
          <br />
          {hex}
        </div>
        <div className="col col-3">
          <button
            className="btn btn-small btn-outline"
            onClick={handleDelete}
          >&#x2715;</button>
        </div>
      </div>
    </div>
  );
}

PickedItem.propTypes = {
  index: React.PropTypes.number.isRequired,
  picked: React.PropTypes.array.isRequired,
  hwb: React.PropTypes.array.isRequired,
  onAdjustColor: React.PropTypes.func.isRequired,
  onDeleteColor: React.PropTypes.func.isRequired,
};

export default PickedItem;
