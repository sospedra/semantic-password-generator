const random = require('lodash.random')
const shall = require('../shall')

const SYMBOLS = '@#$%{}[]()/~,;:.><'.split('')
const EMPTY_CHAR = ''
const RX_WHITE_SPACE = / /g

/**
 * Replace white spaces either by a random symbol or an empty char (remove).
 * Note that this transformer gets rid of the white spaces. Hence has to be
 * the last one always.
 *
 * @param  {String} base
 * @return {String}
 */
module.exports = () => {
  return function transformSymbols (base) {
    return base.replace(RX_WHITE_SPACE, () => {
      return shall()
        ? SYMBOLS[random(SYMBOLS.length - 1)]
        : EMPTY_CHAR
    })
  }
}
