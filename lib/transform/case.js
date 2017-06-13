'use strict';

var shall = require('../shall'

/**
 * Randomly transform to upper case some chars. It assumes that most
 * of the base chars are lower case.
 *
 * @param  {String} base
 * @return {String}
 */
);module.exports = function () {
  return function transformCase(base) {
    return base.split('').map(function (char) {
      return shall.low() ? char.toUpperCase() : char;
    }).join('');
  };
};