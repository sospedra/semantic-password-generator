"use strict";

var MIN_PASSWORD_LENGTH = 8;

var password = module.exports = {};

password.getMaxLength = function (sentences) {
  return sentences.concat // for immutability reasons
  ().sort(function (a, b) {
    return b.length - a.length;
  }).find(function () {
    return true;
  } // return the first element
  ).length;
};

password.getMinLength = function (inputLength) {
  return Math.max(inputLength, MIN_PASSWORD_LENGTH);
};

password.getLength = function (inputLength, maxLength) {
  return Math.min(password.getMinLength(inputLength), maxLength);
};