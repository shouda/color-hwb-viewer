import React, { Component } from 'react';
import color from 'color2';

class HexToHwb extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = { bgcolor: '#FFF' };
  }
  handleChange(event) {
    const hex = /^#([a-fA-F0-9]{3}|[a-fA-F0-9]{6})$/;
    if (event.currentTarget.value.match(hex)) {
      this.props.onAdjustColor(color.parse(event.currentTarget.value).hwbArray());
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
          <div className="mx-auto"
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
