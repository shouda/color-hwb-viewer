/**
 * number range generator
 * @param  {Number} start - begin number
 * @param  {Number} end   - stop number
 * @return {Array}        - [start, ..., end]
 */
export function arrayRange(start, end) {
  const items = [];
  for (let i = start; i <= end; i++) {
    items.push(i);
  }
  return items;
}

/**
 * limit number range
 * @param  {Number} number - origin value
 * @param  {Number} min    - min value
 * @param  {Number} max    - max value
 * @return {Number}        - number between min and max value
 */
export function betweenValue(number, min, max) {
  let n = number;
  if (n < min) {
    n = min;
  } else if (n > max) {
    n = max;
  }
  return n;
}
