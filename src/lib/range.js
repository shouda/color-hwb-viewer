/**
 * number range generator
 * @param  {Number} start - begin number
 * @param  {Number} end   - stop number
 * @return {Array}        - [start, ..., end]
 */
module.exports = (start, end) => Array((end - start) + 1).fill(0).map((_, i) => start + i);
