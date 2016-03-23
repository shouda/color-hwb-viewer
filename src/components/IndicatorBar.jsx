import React from 'react';
import range from '../lib/range';

import IndicatorItem from '../components/IndicatorItem';

function IndicatorBar({ hue, indicator }) {
  const hues = range(0, 359);
  return (
    <table width="720px" className="mx-auto">
      <tbody>
        <tr>
          {hues.map((v) => (
            <td key={v}>
              <IndicatorItem
                id={v}
                hue={hue}
                indicator={indicator}
              />
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}

IndicatorBar.propTypes = {
  hue: React.PropTypes.number.isRequired,
  indicator: React.PropTypes.string.isRequired,
};

export default IndicatorBar;
