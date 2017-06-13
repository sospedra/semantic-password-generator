'use strict';

var random = require('lodash.random');
var shall = require('../shall');

var ASCII_LOWER = 37;
var ASCII_HIGHER = 126;
var EMPTY_CHAR = '';

var addRandomChar = function addRandomChar() {
  if (shall.common()) return EMPTY_CHAR;

  return String.fromCharCode(random(ASCII_LOWER, ASCII_HIGHER));
};

/**
 * Randomly add some ASCII safe chars either at the beginning, the end or both
 * sides of each word.
 *
 * @param  {String} base
 * @return {String}
 */
module.exports = function () {
  return function transformRandom(base) {
    return base.split(' ').map(function (word) {
      return '' + addRandomChar() + word + addRandomChar();
    }).join(' ');
  };
};