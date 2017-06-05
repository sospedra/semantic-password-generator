const MAX = 100
const DEFAULT_RATIO = MAX / 2
const WEIRD_RATIO = 10
const LOW_RATIO = 4
const HIGH_RATIO = 1 + 1 / 3
const COMMON_RATIO = 1 + 1 / 9

/**
 * Given a probabilistic ratio match against a random number to get a true/false.
 * Default value is half the max (50); simulating a flipping coin.
 *
 * @param  {Number} [ratio=50]
 * @return {Bool}
 */
const shall = module.exports = function shall (ratio = DEFAULT_RATIO) {
  return Math.random() * MAX < Math.min(ratio, MAX)
}

/**
 * Expose 4 common probabilistic types. For 10%, 25%, 75% and 90%
 */
shall.weird = function () { return this(MAX / WEIRD_RATIO) }
shall.low = function () { return this(MAX / LOW_RATIO) }
shall.high = function () { return this(MAX / HIGH_RATIO) }
shall.common = function () { return this(MAX / COMMON_RATIO) }
