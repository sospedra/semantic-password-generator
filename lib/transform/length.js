'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var DEFAULT_WORD_MAP = [0, 0];

/**
 * Given a desired length break the sentence with the minimum required words.
 *
 * @param  {String} base
 * @return {String}
 */
module.exports = function (length) {
  return function transformLength(base) {
    var words = base.split(' ');
    var breakingWord = words.map(function (word) {
      return [word, word.length];
    }).reduce(function (memo, _ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          word = _ref2[0],
          wordLength = _ref2[1];

      var lastWordMap = memo[memo.length - 1] || DEFAULT_WORD_MAP;
      return memo.concat([[word, wordLength + lastWordMap[1]]]);
    }, []).filter(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          word = _ref4[0],
          stack = _ref4[1];

      return stack < length;
    }).length;

    return words.slice(0, breakingWord + 1).join(' ');
  };
};