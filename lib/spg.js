'use strict';

var nlp = require('compromise');
var request = require('./request');
var generator = require('./generator');

module.exports = function main() {
  return new Promise(function (resolve, reject) {
    request().catch(function (err) {
      return reject(err);
    }).then(function (article) {
      var doc = nlp(article);
      var sentences = doc.sentences().out('array');

      resolve(generator(sentences));
    });
  });
};