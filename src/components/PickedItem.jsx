import React from 'react';
import { getHex, pickedPushToUrl } from '../lib/color';

function PickedItem({ index, picked, hwb, onAdjustColor, onDeleteColor }) {
  const pickedArr = picked.toJS();
  const hwbArr = hwb.toArray();
  const handleAdjust = () => onAdjustColor(hwbArr);
  const handleDelete = () => {
    onDeleteColor(index);
    pickedPushToUrl(pickedArr.filter((_, i) => i !== index));
  };
  const hex = getHex(hwbArr);
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
          hwb({hwbArr[0]}, {hwbArr[1]}, {hwbArr[2]})
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
  picked: React.PropTypes.objectOf(React.PropTypes.any).isRequired,
  hwb: React.PropTypes.objectOf(React.PropTypes.any).isRequired,
  onAdjustColor: React.PropTypes.func.isRequired,
  onDeleteColor: React.PropTypes.func.isRequired,
};

export default PickedItem;
