const random = require('lodash.random')
const isNumber = require('lodash.isnumber')
const identity = require('lodash.identity')

const password = require('./password')
const transformNormalize = require('./transform/normalize')
const transformLength = require('./transform/length')
const transformLeet = require('./transform/leet')
const transformCase = require('./transform/case')
const transformRandom = require('./transform/random')
const transformSymbols = require('./transform/symbols')

const DEFAULT_SENTENCES = [0] // allows init of all methods

/**
 * Standarized options to set the base sentence and pipe transforms
 * @typedef {Object} Options
 * @property {Bool} case     [false]  - apply case transform
 * @property {Number} length [24]     - min and orientative sentence length
 * @property {Bool} leet     [false]  - apply leet transform
 * @property {Bool} random   [false]  - apply random transform
 * @property {Bool} symbols  [false]  - apply symbols transform
 */

/**
 * Transform incoming args into standarized options
 * @param  {Number|Object} args
 * @return {@type Options}
 */
const sanitizeOptions = (args) => {
  return Object.assign({}, {
    case: false,
    length: isNumber(args) ? args : 24,
    leet: false,
    random: false,
    symbols: false
  }, args)
}

module.exports = (sentences = DEFAULT_SENTENCES) => {
  const maxLength = password.getMaxLength(sentences)

  return function generator (args) {
    const options = sanitizeOptions(args)
    const length = password.getLength(options.length, maxLength)
    const data = sentences.filter((x) => x.length >= length)
    const base = data[random(data.length - 1)]

    if (!base) return null

    return [
      transformNormalize(),
      transformLength(length),
      options.leet && transformLeet(),
      options.case && transformCase(),
      options.random && transformRandom(),
      transformSymbols(options.symbols)
    ]
      .map((fn) => fn || identity)
      .reduce((memo, fn) => fn(memo), base)
  }
}
