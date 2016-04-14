import React from 'react';

import PickedItem from './PickedItem';

function PickedColor({ picked, onAdjustColor, onDeleteColor }) {
  const pickedArr = picked.toArray();
  return (
    <div className="my2 clearfix center">
      <hr />
      {pickedArr.map((v, k) => (
        <PickedItem
          key={k}
          index={k}
          picked={picked}
          hwb={v}
          onAdjustColor={onAdjustColor}
          onDeleteColor={onDeleteColor}
        />
      ))}
    </div>
  );
}

PickedColor.propTypes = {
  picked: React.PropTypes.object.isRequired,
  onAdjustColor: React.PropTypes.func.isRequired,
  onDeleteColor: React.PropTypes.func.isRequired,
};

export default PickedColor;
