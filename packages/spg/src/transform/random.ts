import random from 'lodash.random'
import * as shall from '../shall'

const ASCII_LOWER = 37
const ASCII_HIGHER = 126
const EMPTY_CHAR = ''

const addRandomChar = () => {
  if (shall.common()) return EMPTY_CHAR
  return String.fromCharCode(random(ASCII_LOWER, ASCII_HIGHER))
}

/**
 * Randomly add some ASCII safe chars either at the beginning, the end or both
 * sides of each word.
 */
export default () => {
  return function transformRandom(base: string) {
    return base
      .split(' ')
      .map((word) => `${addRandomChar()}${word}${addRandomChar()}`)
      .join(' ')
  }
}
