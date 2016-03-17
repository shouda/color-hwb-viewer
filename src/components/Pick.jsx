import React from 'react';

function Pick({ onPickColor }) {
  const handleClick = () => onPickColor();
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
  onPickColor: React.PropTypes.func.isRequired,
};

export default Pick;
