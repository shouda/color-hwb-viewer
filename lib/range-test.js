import test from 'ava';
import range from './range';

test('number range generator', (t) => {
  t.deepEqual(range(0, 9), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    'return an array from begin value to end value');
  t.deepEqual(range(-3, 3), [-3, -2, -1, 0, 1, 2, 3],
    'return an array from begin value to end value');
  t.deepEqual(range(3, -3), [3, 2, 1, 0, -1, -2, -3],
    'return an array from begin value to end value');
});
