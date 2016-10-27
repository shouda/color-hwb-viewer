/**
 * number range generator
 * @param  {Number} start - begin number
 * @param  {Number} end   - stop number
 * @return {Array}        - [start, ..., end]
 */
module.exports = (start, end) => {
  const length = (start < end) ? (end - start) + 1 : (start - end) + 1;
  const step = v => ((start < end) ? start + v : start - v);
  return Array(length).fill(0).map((_, i) => step(i));
};
