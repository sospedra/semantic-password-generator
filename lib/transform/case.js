const shall = require('../shall')

/**
 * Randomly transform to upper case some chars. It assumes that most
 * of the base chars are lower case.
 *
 * @param  {String} base
 * @return {String}
 */
module.exports = () => {
  return function transformCase (base) {
    return base
      .split('')
      .map((char) => shall.low() ? char.toUpperCase() : char)
      .join('')
  }
}
