'use strict';

var random = require('lodash.random');
var shall = require('../shall');

var SYMBOLS = '@#$%{}[]()/~,;:.><'.split('');
var EMPTY_CHAR = '';
var RX_WHITE_SPACE = / /g;

/**
 * Replace white spaces either by a random symbol or an empty char (remove).
 * Note that this transformer gets rid of the white spaces. Hence has to be
 * the last one always.
 *
 * @param  {String} base
 * @return {String}
 */
module.exports = function () {
  return function transformSymbols(base) {
    return base.replace(RX_WHITE_SPACE, function () {
      return shall() ? SYMBOLS[random(SYMBOLS.length - 1)] : EMPTY_CHAR;
    });
  };
};