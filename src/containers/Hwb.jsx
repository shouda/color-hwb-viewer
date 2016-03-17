import React from 'react';
import { connect } from 'react-redux';
import {
  selectHue,
  addHue,
  minusHue,
  addWhite,
  minusWhite,
  addBlack,
  minusBlack,
  pickColor,
  adjustColor,
  deleteColor,
} from '../actions/hwb';

import HueBar from '../components/HueBar';
import IndicatorBar from '../components/IndicatorBar';
import ColorInfo from '../components/ColorInfo';
import Adjuster from '../components/Adjuster';
import Pick from '../components/Pick';
import PickedColor from '../components/PickedColor';
import HexToHwb from '../components/HexToHwb';

function Hwb({ origin, adjust, picked, onSelectHue, onAddHue, onMinusHue,
               onAddWhite, onMinusWhite, onAddBlack, onMinusBlack,
               onPickColor, onAdjustColor, onDeleteColor }) {
  return (
    <div>
      <div className="clearfix mb2">
        <IndicatorBar indicator="." hue={origin[0]} />
        <HueBar onSelectHue={onSelectHue} />
      </div>
      <HexToHwb onAdjustColor={onAdjustColor} />
      <hr />
      <div className="clearfix mt2">
        <div className="col col-5">
          <ColorInfo hwb={origin} />
        </div>
        <div className="col col-2">
          <Adjuster
            adjust={adjust}
            onAddHue={onAddHue}
            onMinusHue={onMinusHue}
            onAddWhite={onAddWhite}
            onMinusWhite={onMinusWhite}
            onAddBlack={onAddBlack}
            onMinusBlack={onMinusBlack}
          />
        </div>
        <div className="col col-5">
          <ColorInfo hwb={adjust} />
          <Pick onPickColor={onPickColor} />
        </div>
      </div>
      <PickedColor
        picked={picked}
        onAdjustColor={onAdjustColor}
        onDeleteColor={onDeleteColor}
      />
      <div className="mt4 mb1 h6 center">
        <span>
          source code:&nbsp;
          <a href="https://github.com/shouda/color-hwb-viewer">
            https://github.com/shouda/color-hwb-viewer
          </a>
        </span>
      </div>
    </div>
  );
}

Hwb.propTypes = {
  origin: React.PropTypes.array,
  adjust: React.PropTypes.array,
  picked: React.PropTypes.array,
  onSelectHue: React.PropTypes.func,
  onAddHue: React.PropTypes.func,
  onMinusHue: React.PropTypes.func,
  onAddWhite: React.PropTypes.func,
  onMinusWhite: React.PropTypes.func,
  onAddBlack: React.PropTypes.func,
  onMinusBlack: React.PropTypes.func,
  onPickColor: React.PropTypes.func,
  onAdjustColor: React.PropTypes.func,
  onDeleteColor: React.PropTypes.func,
};

function mapStateToProps(state) {
  return {
    origin: state.hwb.get('origin').toArray(),
    adjust: state.hwb.get('adjust').toArray(),
    picked: state.hwb.get('picked').toArray(),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSelectHue: (v) => dispatch(selectHue(v)),
    onAddHue: () => dispatch(addHue()),
    onMinusHue: () => dispatch(minusHue()),
    onAddWhite: () => dispatch(addWhite()),
    onMinusWhite: () => dispatch(minusWhite()),
    onAddBlack: () => dispatch(addBlack()),
    onMinusBlack: () => dispatch(minusBlack()),
    onPickColor: () => dispatch(pickColor()),
    onAdjustColor: (v) => dispatch(adjustColor(v)),
    onDeleteColor: (v) => dispatch(deleteColor(v)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hwb);
