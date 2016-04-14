import React from 'react';

function Adjuster({ adjust, onAddHue, onMinusHue, onAddWhite, onMinusWhite,
                    onAddBlack, onMinusBlack }) {
  const adjustArr = adjust.toArray();
  const addHue = adjustArr[0] >= 359;
  const minusHue = adjustArr[0] <= 0;
  const addWhite = adjustArr[1] >= 100;
  const minusWhite = adjustArr[1] <= 0;
  const addBlack = adjustArr[2] >= 100;
  const minusBlack = adjustArr[2] <= 0;
  const handleAddHue = () => onAddHue();
  const handleMinusHue = () => onMinusHue();
  const handleAddWhite = () => onAddWhite();
  const handleMinusWhite = () => onMinusWhite();
  const handleAddBlack = () => onAddBlack();
  const handleMinusBlack = () => onMinusBlack();
  return (
    <div>
      <div className="clearfix"> &nbsp; </div>
      <div className="clearfix">
        <div className="col col-6 center">
          <button
            className="btn btn-primary"
            onClick={handleMinusHue}
            disabled={minusHue}
          >-</button>
        </div>
        <div className="col col-6 center">
          <button
            className="btn btn-primary"
            onClick={handleAddHue}
            disabled={addHue}
          >+</button>
        </div>
      </div>
      <div className="clearfix py1">
        <div className="col col-6 center">
          <button
            className="btn btn-primary"
            onClick={handleMinusWhite}
            disabled={minusWhite}
          >-</button>
        </div>
        <div className="col col-6 center">
          <button
            className="btn btn-primary"
            onClick={handleAddWhite}
            disabled={addWhite}
          >+</button>
        </div>
      </div>
      <div className="clearfix">
        <div className="col col-6 center">
          <button
            className="btn btn-primary"
            onClick={handleMinusBlack}
            disabled={minusBlack}
          >-</button>
        </div>
        <div className="col col-6 center">
          <button
            className="btn btn-primary"
            onClick={handleAddBlack}
            disabled={addBlack}
          >+</button>
        </div>
      </div>
    </div>
  );
}

Adjuster.propTypes = {
  adjust: React.PropTypes.object.isRequired,
  onAddHue: React.PropTypes.func.isRequired,
  onMinusHue: React.PropTypes.func.isRequired,
  onAddWhite: React.PropTypes.func.isRequired,
  onMinusWhite: React.PropTypes.func.isRequired,
  onAddBlack: React.PropTypes.func.isRequired,
  onMinusBlack: React.PropTypes.func.isRequired,
};

export default Adjuster;
