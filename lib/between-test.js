import test from 'ava';
import between from './between';

test('limit number range', (t) => {
  t.is(between(5, 1, 10), 5, 'number between min and max value will return number');
  t.is(between(-1, 1, 10), 1, 'number less than min value will return min value');
  t.is(between(12, 1, 10), 10, 'number larger than max value will return max value');
});
