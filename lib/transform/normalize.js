const nlp = require('compromise')

/**
 * Remove non latin chars, etc. That'll cause problems with non-specific
 * keyboard layouts.
 *
 * @param  {String} base
 * @return {String}
 */
module.exports = () => {
  return function transformNormalize (base) {
    console.log('normalize', base)
    return nlp(base).normalize().out()
  }
}
