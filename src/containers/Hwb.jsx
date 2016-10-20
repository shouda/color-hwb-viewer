import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
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
  locationChange,
  locationSync,
} from '../actions/hwb';
import { getHexURL } from '../lib/color';

import HueBar from '../components/HueBar';
import ColorInfo from '../components/ColorInfo';
import Adjuster from '../components/Adjuster';
import Pick from '../components/Pick';
import PickedColor from '../components/PickedColor';
import HexToHwb from '../components/HexToHwb';

class Hwb extends Component {
  constructor(props) {
    super(props);
    this.redirect = false;
    this.picked = [];
    if (this.props.location.match(/^#\/picked\/\-\S+$/)
          && this.props.location !== `#${this.getPath()}`) {
      this.props.onLocationSync(this.props.location);
    }
  }
  componentWillUpdate(nextProps) {
    if (nextProps.picked !== this.props.picked) {
      this.redirect = true;
      this.picked = nextProps.picked.toJS();
      this.props.onLocationChange(`#${this.getPath()}`);
    }
  }
  componentDidUpdate() {
    this.redirect = false;
  }
  getPath() {
    return (this.picked.length === 0) ? '/' : `/picked/${getHexURL(this.picked)}`;
  }
  render() {
    return this.redirect ? (
      <Redirect to={this.getPath()} />
    ) : (
      <div>
        <div className="clearfix mb2">
          <HueBar origin={this.props.origin} onSelectHue={this.props.onSelectHue} />
        </div>
        <HexToHwb onAdjustColor={this.props.onAdjustColor} />
        <hr />
        <div className="clearfix mt2">
          <div className="col col-5">
            <ColorInfo hwb={this.props.origin} />
          </div>
          <div className="col col-2">
            <Adjuster
              adjust={this.props.adjust}
              onAddHue={this.props.onAddHue}
              onMinusHue={this.props.onMinusHue}
              onAddWhite={this.props.onAddWhite}
              onMinusWhite={this.props.onMinusWhite}
              onAddBlack={this.props.onAddBlack}
              onMinusBlack={this.props.onMinusBlack}
            />
          </div>
          <div className="col col-5">
            <ColorInfo hwb={this.props.adjust} />
            <Pick
              onPickColor={this.props.onPickColor}
            />
          </div>
        </div>
        <PickedColor
          picked={this.props.picked}
          onAdjustColor={this.props.onAdjustColor}
          onDeleteColor={this.props.onDeleteColor}
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
}

Hwb.propTypes = {
  origin: React.PropTypes.objectOf(React.PropTypes.any),
  adjust: React.PropTypes.objectOf(React.PropTypes.any),
  picked: React.PropTypes.objectOf(React.PropTypes.any),
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
  location: React.PropTypes.string,
  onLocationChange: React.PropTypes.func,
  onLocationSync: React.PropTypes.func,
};

function mapStateToProps(state) {
  return {
    origin: state.hwb.get('origin'),
    adjust: state.hwb.get('adjust'),
    picked: state.hwb.get('picked'),
    location: state.location.get('path'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSelectHue: v => dispatch(selectHue(v)),
    onAddHue: () => dispatch(addHue()),
    onMinusHue: () => dispatch(minusHue()),
    onAddWhite: () => dispatch(addWhite()),
    onMinusWhite: () => dispatch(minusWhite()),
    onAddBlack: () => dispatch(addBlack()),
    onMinusBlack: () => dispatch(minusBlack()),
    onPickColor: () => dispatch(pickColor()),
    onAdjustColor: v => dispatch(adjustColor(v)),
    onDeleteColor: v => dispatch(deleteColor(v)),
    onLocationChange: v => dispatch(locationChange(v)),
    onLocationSync: v => dispatch(locationSync(v)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hwb);
