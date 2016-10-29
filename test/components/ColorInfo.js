/* eslint-disable react/jsx-filename-extension */
import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import { List } from 'immutable';
import ColorInfo from '../../src/components/ColorInfo';

test('show color info', (t) => {
  const hwb = List([180, 5, 10]);
  const wrapper = shallow(<ColorInfo hwb={hwb} />);
  t.is(wrapper.containsMatchingElement(<div className="col col-6">#0DE6E5</div>), true);
});
