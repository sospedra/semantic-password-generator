const random = require('lodash.random')
const password = require('./password')
const transformNormalize = require('./transform/normalize')
const transformLength = require('./transform/length')
const transformLeet = require('./transform/leet')
const transformCase = require('./transform/case')
const transformRandom = require('./transform/random')
const transformSymbols = require('./transform/symbols')

const LENGTH_DEFAULT = 24

module.exports = (sentences) => {
  const maxLength = password.getMaxLength(sentences)

  return function generator (inputLength = LENGTH_DEFAULT) {
    const length = password.getLength(inputLength, maxLength)
    const data = sentences.filter((x) => x.length >= length)
    const base = data[random(data.length - 1)]

    if (!base) return null

    return [
      transformNormalize(),
      transformLength(length),
      transformLeet(),
      transformCase(),
      transformRandom(),
      transformSymbols()
    ].reduce((memo, fn) => fn(memo), base)
  }
}
