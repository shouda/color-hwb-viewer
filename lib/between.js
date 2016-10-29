/**
 * limit number range
 * @param  {Number} number - origin value
 * @param  {Number} min    - min value
 * @param  {Number} max    - max value
 * @return {Number}        - number between min and max value
 */
module.exports = (number, min, max) => {
  const n = (number > max) ? max : number;
  return (n < min) ? min : n;
};
