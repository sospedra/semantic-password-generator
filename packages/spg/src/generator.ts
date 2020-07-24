import random from 'lodash.random'
import isNumber from 'lodash.isnumber'
import identity from 'lodash.identity'
import * as password from './password'
import transformLength from './transform/length'
import transformLeet from './transform/leet'
import transformCase from './transform/case'
import transformRandom from './transform/random'
import transformSymbols from './transform/symbols'

const DEFAULT_SENTENCES = [''] // allows init of all methods
const DEFAULT_ARGS = {
  case: false,
  length: 24,
  leet: false,
  random: false,
  symbols: false,
}
type Args = number | typeof DEFAULT_ARGS

const sanitizeOptions = (args: Args = {} as Args): typeof DEFAULT_ARGS => {
  return {
    ...DEFAULT_ARGS,
    ...(isNumber(args) ? { length: args } : args),
  }
}

export default function createGenerator(sentences = DEFAULT_SENTENCES) {
  const maxLength = password.getMaxLength(sentences)

  return function generator(args?: Args) {
    const options = sanitizeOptions(args)
    const length = password.getLength(options.length, maxLength)
    const data = sentences.filter((x) => x.length >= length)
    const base = data[random(data.length - 1)]

    if (!base) return null

    return [
      transformLength(length),
      options.leet && transformLeet(),
      options.case && transformCase(),
      options.random && transformRandom(),
      transformSymbols(options.symbols),
    ]
      .map((fn) => fn || identity)
      .reduce((memo, fn) => fn(memo), base)
  }
}
