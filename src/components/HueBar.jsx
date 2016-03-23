import React from 'react';
import range from '../lib/range';

import HueItem from '../components/HueItem';

function HueBar({ onSelectHue }) {
  const hues = range(0, 359);
  return (
    <table width="720px" className="mx-auto">
      <tbody>
        <tr>
          {hues.map((v) => (
            <td key={v}>
              <HueItem hue={v} onSelectHue={onSelectHue} />
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}

HueBar.propTypes = {
  onSelectHue: React.PropTypes.func.isRequired,
};

export default HueBar;
