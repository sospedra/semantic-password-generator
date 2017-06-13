'use strict';

var nlp = require('compromise'

/**
 * Remove non latin chars, etc. That'll cause problems with non-specific
 * keyboard layouts.
 *
 * @param  {String} base
 * @return {String}
 */
);module.exports = function () {
  return function transformNormalize(base) {
    return nlp(base).normalize().out();
  };
};