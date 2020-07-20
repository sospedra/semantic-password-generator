import * as shall from '../shall'

const LEET_DICT = {
  a: 4,
  b: 8,
  e: 3,
  g: 9,
  l: 1,
  o: 0,
  s: 5,
  t: 7,
  z: 2,
}

/**
 * Randomly replace some char by the leet equivalent if any.
 */
export default () => {
  return function transformLeet(base: string) {
    return base
      .split('')
      .map((char) => [char, LEET_DICT[char.toLowerCase()]])
      .map(([char, leet]) => (leet && shall.weird() ? leet : char))
      .join('')
  }
}
