'use strict';

var https = require('https');
var decode = require('ent/decode');

var RX_HTML_TAGS = /<\/?[^>]+(>|$)/g;
var RX_BASIC_ASCII = /[^\x20-\xFF]/g;
var WIKI_ROOT = 'https://en.wikipedia.org/w/api.php?action=query';
var WIKI_RANDOM_PATH = ['generator=random', 'grnnamespace=0', 'prop=extracts', 'exchars=500', 'format=json', 'origin=*'].join('&'

/**
 * Trasnform the response's chunks into a JSON and then
 * strip the HTML tags, HTML entities (decode) and non-basic-ascii
 * code (accents allowed) from the payload's extract attr.
 *
 * @param  {Array} chunks - Response's buffer pieces
 * @return {String} Sanitized Wikipedia extract
 */
);var bufferToString = function bufferToString(chunks) {
  var raw = Buffer.concat(chunks).toString();
  var payload = JSON.parse(raw);
  var pages = payload.query.pages;
  var extract = pages[Object.keys(pages)[0]].extract;


  return decode(extract.replace(RX_HTML_TAGS, '').replace(RX_BASIC_ASCII, ''));
};

/**
 * Request a random Wikipedia article
 * @return {String} Sanitized article description
 */
module.exports = function () {
  return new Promise(function (resolve, reject) {
    https.get(WIKI_ROOT + '&' + WIKI_RANDOM_PATH, function (response) {
      var bodyChunks = [];
      var statusCode = response.statusCode;
      statusCode >= 400 && reject(new Error('Request failed. Code: ' + statusCode));

      response.on('data', function (chunk) {
        return bodyChunks.push(chunk);
      }).on('end', function () {
        return resolve(bufferToString(bodyChunks));
      });
    }).on('error', function (err) {
      return reject(err);
    });
  });
};