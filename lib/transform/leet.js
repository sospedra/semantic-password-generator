'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var shall = require('../shall');

var LEET_DICT = {
  'a': 4,
  'b': 8,
  'e': 3,
  'g': 9,
  'l': 1,
  'o': 0,
  's': 5,
  't': 7,
  'z': 2

  /**
   * Randomly replace some char by the leet equivalent if any.
   *
   * @param  {String} base
   * @return {String}
   */
};module.exports = function () {
  return function transformLeet(base) {
    return base.split('').map(function (char) {
      return [char, LEET_DICT[char.toLowerCase()]];
    }).map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          char = _ref2[0],
          leet = _ref2[1];

      return leet && shall.weird() ? leet : char;
    }).join('');
  };
};