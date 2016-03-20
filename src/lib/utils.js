/**
 * number range generator
 * @param  {Number} start - begin number
 * @param  {Number} end   - stop number
 * @return {Array}        - [start, ..., end]
 */
export function arrayRange(start, end) {
  return Array((end - start) + 1).fill(0).map((_, i) => start + i);
}

/**
 * limit number range
 * @param  {Number} number - origin value
 * @param  {Number} min    - min value
 * @param  {Number} max    - max value
 * @return {Number}        - number between min and max value
 */
export function betweenValue(number, min, max) {
  const n = (number > max) ? max : number;
  return (n < min) ? min : n;
}
