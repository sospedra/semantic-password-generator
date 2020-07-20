import random from 'lodash.random'
import * as shall from '../shall'

const DEFAULT_SYMBOL = '.'
const SYMBOLS = `@#$%{}[]()/~,;:><${DEFAULT_SYMBOL}`.split('')
const EMPTY_CHAR = ''
const RX_WHITE_SPACE = / /g

/**
 * Replace white spaces either by a random symbol or an empty char (remove).
 * Note that this transformer gets rid of the white spaces. Hence has to be
 * the last one always.
 * If it's disabled always return the DEFAULT_SYMBOL
 */
export default (isEnabled: boolean) => {
  return function transformSymbols(base: string) {
    return base.replace(RX_WHITE_SPACE, () => {
      if (!isEnabled) return DEFAULT_SYMBOL

      return shall.regular() ? SYMBOLS[random(SYMBOLS.length - 1)] : EMPTY_CHAR
    })
  }
}
