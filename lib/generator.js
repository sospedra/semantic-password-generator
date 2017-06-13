'use strict';

var random = require('lodash.random');
var password = require('./password');
var transformNormalize = require('./transform/normalize');
var transformLength = require('./transform/length');
var transformLeet = require('./transform/leet');
var transformCase = require('./transform/case');
var transformRandom = require('./transform/random');
var transformSymbols = require('./transform/symbols');

var LENGTH_DEFAULT = 24;

module.exports = function (sentences) {
  var maxLength = password.getMaxLength(sentences);

  return function generator() {
    var inputLength = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : LENGTH_DEFAULT;

    var length = password.getLength(inputLength, maxLength);
    var data = sentences.filter(function (x) {
      return x.length >= length;
    });
    var base = data[random(data.length - 1)];

    if (!base) return null;

    return [transformNormalize(), transformLength(length), transformLeet(), transformCase(), transformRandom(), transformSymbols()].reduce(function (memo, fn) {
      return fn(memo);
    }, base);
  };
};