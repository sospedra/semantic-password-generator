'use strict';

var random = require('lodash.random');
var shall = require('../shall');

var DEFAULT_SYMBOL = '.';
var SYMBOLS = ('@#$%{}[]()/~,;:><' + DEFAULT_SYMBOL).split('');
var EMPTY_CHAR = '';
var RX_WHITE_SPACE = / /g;

/**
 * Replace white spaces either by a random symbol or an empty char (remove).
 * Note that this transformer gets rid of the white spaces. Hence has to be
 * the last one always.
 * If it's disabled always return the DEFAULT_SYMBOL
 *
 * @param  {String} base
 * @return {String}
 */
module.exports = function (isEnabled) {
  return function transformSymbols(base) {
    return base.replace(RX_WHITE_SPACE, function () {
      if (!isEnabled) return DEFAULT_SYMBOL;

      return shall() ? SYMBOLS[random(SYMBOLS.length - 1)] : EMPTY_CHAR;
    });
  };
};