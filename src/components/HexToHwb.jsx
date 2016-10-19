import React, { Component } from 'react';
import { checkHex, getHwb } from '../lib/color';

class HexToHwb extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = { bgcolor: '#FFF' };
  }
  handleChange(event) {
    if (checkHex(event.currentTarget.value)) {
      this.props.onAdjustColor(getHwb(event.currentTarget.value));
      this.setState({ bgcolor: event.currentTarget.value });
    }
  }
  render() {
    return (
      <div>
        <div className="clearfix mb1 center">
          <input
            name="hex"
            type="text"
            placeholder="hex value..."
            onChange={this.handleChange}
          />
        </div>
        <div className="clearfix mb2">
          <div
            className="mx-auto"
            style={{ backgroundColor: this.state.bgcolor, width: '25%' }}
          >&nbsp;</div>
        </div>
      </div>
    );
  }
}

HexToHwb.propTypes = {
  onAdjustColor: React.PropTypes.func.isRequired,
};

export default HexToHwb;
