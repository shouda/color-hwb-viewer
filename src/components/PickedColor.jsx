import React from 'react';

import PickedItem from './PickedItem';

function PickedColor({ picked, onAdjustColor, onDeleteColor }) {
  return (
    <div className="my2 clearfix center">
      <hr />
      {picked.map((v, k) => (
        <PickedItem
          key={k}
          index={k}
          picked={picked}
          hwb={v.toArray()}
          onAdjustColor={onAdjustColor}
          onDeleteColor={onDeleteColor}
        />
      ))}
    </div>
  );
}

PickedColor.propTypes = {
  picked: React.PropTypes.array.isRequired,
  onAdjustColor: React.PropTypes.func.isRequired,
  onDeleteColor: React.PropTypes.func.isRequired,
};

export default PickedColor;
