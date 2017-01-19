import React from 'react';

import PickedItem from './PickedItem';

function PickedColor({ picked, onAdjustColor, onDeleteColor }) {
  const pickedArr = picked.toArray().map((v, k) => ({ id: k, hwb: v }));
  return (
    <div className="my2 clearfix center">
      <hr />
      {pickedArr.map(item => (
        <PickedItem
          key={item.id}
          index={item.id}
          hwb={item.hwb}
          onAdjustColor={onAdjustColor}
          onDeleteColor={onDeleteColor}
        />
      ))}
    </div>
  );
}

PickedColor.propTypes = {
  picked: React.PropTypes.objectOf(React.PropTypes.any).isRequired,
  onAdjustColor: React.PropTypes.func.isRequired,
  onDeleteColor: React.PropTypes.func.isRequired,
};

export default PickedColor;
