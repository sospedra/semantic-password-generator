const MAX = 100
const DEFAULT_RATIO = MAX / 2

/**
 * Given a probabilistic ratio match against a random number to get a true/false.
 * Default value is half the max (50); simulating a flipping coin.
 */
const shall = (ratio = DEFAULT_RATIO) => {
  return Math.random() * MAX < Math.min(ratio, MAX)
}

/**
 * Expose 4 common probabilistic types. For 10%, 25%, 50%, 75% and 90%
 */
export const weird = () => shall(10)
export const low = () => shall(25)
export const regular = () => shall()
export const high = () => shall(75)
export const common = () => shall(90)
