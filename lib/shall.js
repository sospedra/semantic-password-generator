"use strict";

var MAX = 100;
var DEFAULT_RATIO = MAX / 2;
var WEIRD_RATIO = 10;
var LOW_RATIO = 4;
var HIGH_RATIO = 1 + 1 / 3;
var COMMON_RATIO = 1 + 1 / 9;

/**
 * Given a probabilistic ratio match against a random number to get a true/false.
 * Default value is half the max (50); simulating a flipping coin.
 *
 * @param  {Number} [ratio=50]
 * @return {Bool}
 */
var shall = function shall() {
  var ratio = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_RATIO;

  return Math.random() * MAX < Math.min(ratio, MAX);
};

/**
 * Expose 4 common probabilistic types. For 10%, 25%, 75% and 90%
 */
shall.weird = function () {
  return this(MAX / WEIRD_RATIO);
};
shall.low = function () {
  return this(MAX / LOW_RATIO);
};
shall.high = function () {
  return this(MAX / HIGH_RATIO);
};
shall.common = function () {
  return this(MAX / COMMON_RATIO);
};

module.exports = shall;