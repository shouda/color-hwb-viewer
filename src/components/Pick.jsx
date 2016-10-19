import React from 'react';
import { pickedPushToUrl } from '../lib/color';

function Pick({ adjust, picked, onPickColor }) {
  const handleClick = () => {
    onPickColor();
    const adjustArr = adjust.toArray();
    const pickedArr = picked.toJS();
    pickedPushToUrl([...pickedArr, adjustArr]);
  };
  return (
    <div className="col col-12">
      <button
        className="btn btn-primary bg-teal"
        style={{ width: '100%' }}
        onClick={handleClick}
      >Pick</button>
    </div>
  );
}

Pick.propTypes = {
  adjust: React.PropTypes.objectOf(React.PropTypes.any).isRequired,
  picked: React.PropTypes.objectOf(React.PropTypes.any).isRequired,
  onPickColor: React.PropTypes.func.isRequired,
};

export default Pick;
