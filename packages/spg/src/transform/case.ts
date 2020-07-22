import * as shall from '../shall'

/**
 * Randomly transform to upper case some chars. It assumes that most
 * of the base chars are lower case.
 */
export default () => {
  return function transformCase(base: string) {
    return base
      .split('')
      .map((char) => (shall.low() ? char.toUpperCase() : char))
      .join('')
  }
}
