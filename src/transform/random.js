const random = require('lodash.random')
const shall = require('../shall')

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
 *
 * @param  {String} base
 * @return {String}
 */
module.exports = () => {
  return function transformRandom (base) {
    return base
      .split(' ')
      .map((word) => `${addRandomChar()}${word}${addRandomChar()}`)
      .join(' ')
  }
}
