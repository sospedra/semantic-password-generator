'use strict';

var random = require('lodash.random');
var isNumber = require('lodash.isnumber');
var identity = require('lodash.identity');

var password = require('./password');
var transformNormalize = require('./transform/normalize');
var transformLength = require('./transform/length');
var transformLeet = require('./transform/leet');
var transformCase = require('./transform/case');
var transformRandom = require('./transform/random');
var transformSymbols = require('./transform/symbols');

var DEFAULT_SENTENCES = [0]; // allows init of all methods

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
var sanitizeOptions = function sanitizeOptions(args) {
  return Object.assign({}, {
    case: false,
    length: isNumber(args) ? args : 24,
    leet: false,
    random: false,
    symbols: false
  }, args);
};

module.exports = function () {
  var sentences = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_SENTENCES;

  var maxLength = password.getMaxLength(sentences);

  return function generator(args) {
    var options = sanitizeOptions(args);
    var length = password.getLength(options.length, maxLength);
    var data = sentences.filter(function (x) {
      return x.length >= length;
    });
    var base = data[random(data.length - 1)];

    if (!base) return null;

    return [transformNormalize(), transformLength(length), options.leet && transformLeet(), options.case && transformCase(), options.random && transformRandom(), transformSymbols(options.symbols)].map(function (fn) {
      return fn || identity;
    }).reduce(function (memo, fn) {
      return fn(memo);
    }, base);
  };
};