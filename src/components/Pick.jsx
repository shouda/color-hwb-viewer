import React from 'react';
import { hashHistory } from 'react-router';
import { getHexURL } from '../lib/color.js';

function Pick({ adjust, picked, onPickColor }) {
  const handleClick = () => {
    onPickColor();
    const items = [];
    picked.map((v) => items.push(v.toJS()));
    items.push(adjust);
    hashHistory.push(`/picked/${getHexURL(items)}`);
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
  adjust: React.PropTypes.array.isRequired,
  picked: React.PropTypes.array.isRequired,
  onPickColor: React.PropTypes.func.isRequired,
};

export default Pick;
