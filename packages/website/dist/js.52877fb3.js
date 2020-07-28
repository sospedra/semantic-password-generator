// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/elements.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$password = exports.$symbols = exports.$random = exports.$leet = exports.$case = exports.$hint = exports.$slider = exports.$toast = exports.$renew = void 0;
exports.$renew = document.querySelector('#js-renew');
exports.$toast = document.querySelector('#js-toast');
exports.$slider = document.querySelector('#js-slider');
exports.$hint = document.querySelector('#js-hint');
exports.$case = document.querySelector('#js-case');
exports.$leet = document.querySelector('#js-leet');
exports.$random = document.querySelector('#js-random');
exports.$symbols = document.querySelector('#js-symbols');
exports.$password = document.querySelector('#js-password');
},{}],"js/clipboard.ts":[function(require,module,exports) {
"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addClipboard = void 0;

var elements_1 = require("./elements");

exports.addClipboard = function () {
  return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
      elements_1.$password.addEventListener('click', function () {
        return __awaiter(void 0, void 0, void 0, function () {
          return __generator(this, function (_a) {
            elements_1.$password.select();

            if (document.queryCommandSupported('copy')) {
              document.execCommand('copy');
              elements_1.$toast.style.animation = 'fadein 4s';
              elements_1.$toast.addEventListener('animationend', function () {
                elements_1.$toast.style.animation = '';
              });
            }

            return [2
            /*return*/
            ];
          });
        });
      });
      return [2
      /*return*/
      ];
    });
  });
};
},{"./elements":"js/elements.ts"}],"../../../node_modules/unfetch/dist/unfetch.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(e, n) {
  return n = n || {}, new Promise(function (t, r) {
    var s = new XMLHttpRequest(),
        o = [],
        u = [],
        i = {},
        a = function () {
      return {
        ok: 2 == (s.status / 100 | 0),
        statusText: s.statusText,
        status: s.status,
        url: s.responseURL,
        text: function () {
          return Promise.resolve(s.responseText);
        },
        json: function () {
          return Promise.resolve(JSON.parse(s.responseText));
        },
        blob: function () {
          return Promise.resolve(new Blob([s.response]));
        },
        clone: a,
        headers: {
          keys: function () {
            return o;
          },
          entries: function () {
            return u;
          },
          get: function (e) {
            return i[e.toLowerCase()];
          },
          has: function (e) {
            return e.toLowerCase() in i;
          }
        }
      };
    };

    for (var l in s.open(n.method || "get", e, !0), s.onload = function () {
      s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function (e, n, t) {
        o.push(n = n.toLowerCase()), u.push([n, t]), i[n] = i[n] ? i[n] + "," + t : t;
      }), t(a());
    }, s.onerror = r, s.withCredentials = "include" == n.credentials, n.headers) s.setRequestHeader(l, n.headers[l]);

    s.send(n.body || null);
  });
}
},{}],"../../../node_modules/semantic-password-generator/src/request.ts":[function(require,module,exports) {
"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var unfetch_1 = __importDefault(require("unfetch"));

var WIKI_ROOT = 'https://en.wikipedia.org/w/api.php?action=query';
var WIKI_RANDOM_PATH = ['generator=random', 'grnnamespace=0', 'prop=extracts', 'exchars=500', 'format=json', 'origin=*'].join('&');

function request() {
  return __awaiter(this, void 0, void 0, function () {
    var response, pages;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , unfetch_1.default(WIKI_ROOT + "&" + WIKI_RANDOM_PATH)];

        case 1:
          response = _a.sent();

          if (response.status >= 400) {
            new Error("Request failed. Code: " + response.status + ". Text: " + response.statusText);
          }

          return [4
          /*yield*/
          , response.json()];

        case 2:
          pages = _a.sent().query.pages;
          return [2
          /*return*/
          , pages[Object.keys(pages)[0]].extract];
      }
    });
  });
}

exports.default = request;
},{"unfetch":"../../../node_modules/unfetch/dist/unfetch.mjs"}],"../../../node_modules/wink-porter2-stemmer/src/wink-porter2-stemmer.js":[function(require,module,exports) {
//     wink-porter2-stemmer
//     Implementation of Porter Stemmer Algorithm V2 by Dr Martin F Porter
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of “wink-porter2-stemmer”.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

// Implements the Porter Stemmer Algorithm V2 by Dr Martin F Porter.
// Reference: https://snowballstem.org/algorithms/english/stemmer.html

// ## Regex Definitions

// Regex definition of `double`.
var rgxDouble = /(bb|dd|ff|gg|mm|nn|pp|rr|tt)$/;
// Definition for Step Ia suffixes.
var rgxSFXsses = /(.+)(sses)$/;
var rgxSFXiedORies2 = /(.{2,})(ied|ies)$/;
var rgxSFXiedORies1 = /(.{1})(ied|ies)$/;
var rgxSFXusORss = /(.+)(us|ss)$/;
var rgxSFXs = /(.+)(s)$/;
// Definition for Step Ib suffixes.
var rgxSFXeedlyOReed = /(.*)(eedly|eed)$/;
var rgxSFXedORedlyORinglyORing = /([aeiouy].*)(ed|edly|ingly|ing)$/;
var rgxSFXatORblORiz = /(at|bl|iz)$/;
// Definition for Step Ic suffixes.
var rgxSFXyOR3 = /(.+[^aeiouy])([y3])$/;
// Definition for Step II suffixes; note we have spot the longest suffix.
var rgxSFXstep2 = /(ization|ational|fulness|ousness|iveness|tional|biliti|lessli|entli|ation|alism|aliti|ousli|iviti|fulli|enci|anci|abli|izer|ator|alli|bli|ogi|li)$/;
var rgxSFXstep2WithReplacements = [
  // Length 7.
  { rgx: /ational$/, replacement: 'ate' },
  { rgx: /ization$/, replacement: 'ize' },
  { rgx: /fulness$/, replacement: 'ful' },
  { rgx: /ousness$/, replacement: 'ous' },
  { rgx: /iveness$/, replacement: 'ive' },
  // Length 6.
  { rgx: /tional$/, replacement: 'tion' },
  { rgx: /biliti$/, replacement: 'ble' },
  { rgx: /lessli$/, replacement: 'less' },
  // Length 5.
  { rgx: /iviti$/, replacement: 'ive' },
  { rgx: /ousli$/, replacement: 'ous' },
  { rgx: /ation$/, replacement: 'ate' },
  { rgx: /entli$/, replacement: 'ent' },
  { rgx: /(.*)(alism|aliti)$/, replacement: '$1al' },
  { rgx: /fulli$/, replacement: 'ful' },
  // Length 4.
  { rgx: /alli$/, replacement: 'al' },
  { rgx: /ator$/, replacement: 'ate' },
  { rgx: /izer$/, replacement: 'ize' },
  { rgx: /enci$/, replacement: 'ence' },
  { rgx: /anci$/, replacement: 'ance' },
  { rgx: /abli$/, replacement: 'able' },
  // Length 3.
  { rgx: /bli$/, replacement: 'ble' },
  { rgx: /(.*)(l)(ogi)$/, replacement: '$1$2og' },
  // Length 2.
  { rgx: /(.*)([cdeghkmnrt])(li)$/, replacement: '$1$2' }
];
// Definition for Step III suffixes; once again spot the longest one first!
var rgxSFXstep3 = /(ational|tional|alize|icate|iciti|ative|ical|ness|ful)$/;
var rgxSFXstep3WithReplacements = [
  { rgx: /ational$/, replacement: 'ate' },
  { rgx: /tional$/, replacement: 'tion' },
  { rgx: /alize$/, replacement: 'al' },
  { rgx: /(.*)(icate|iciti|ical)$/, replacement: '$1ic' },
  { rgx: /(ness|ful)$/, replacement: '' },
];
// Definition for Step IV suffixes.
var rgxSFXstep4 = /(ement|ance|ence|able|ible|ment|ant|ent|ism|ate|iti|ous|ive|ize|al|er|ic)$/;
var rgxSFXstep4Full = /(ement|ance|ence|able|ible|ment|ant|ent|ism|ate|iti|ous|ive|ize|ion|al|er|ic)$/;
var rgxSFXstep4ion = /(.*)(s|t)(ion)$/;
// Exceptions Set I.
var exceptions1 = Object.create( null );
// Mapped!
exceptions1.skis = 'ski';
exceptions1.skies = 'sky';
exceptions1.dying = 'die';
exceptions1.lying = 'lie';
exceptions1.tying = 'tie';
exceptions1.idly = 'idl';
exceptions1.gently = 'gentl';
exceptions1.ugly = 'ugli';
exceptions1.early = 'earli';
exceptions1.only = 'onli';
exceptions1.singly = 'singl';
// Invariants!
exceptions1.sky = 'sky';
exceptions1.news = 'news';
exceptions1.atlas = 'atlas';
exceptions1.cosmos = 'cosmos';
exceptions1.bias = 'bias';
exceptions1.andes = 'andes';

// Exceptions Set II.
// Note, these are to be treated as full words.
var rgxException2 = /^(inning|outing|canning|herring|proceed|exceed|succeed|earring)$/;

// ## Private functions

// ### prelude
/**
 * Performs initial pre-processing by transforming the input string `s` as
 * per the replacements.
 *
 * @param {String} s Input string
 * @return {String} Processed string
 * @private
 */
var prelude = function ( s ) {
  return ( s
            // Handle `y`'s.
            .replace( /^y/, '3' )
            .replace( /([aeiou])y/, '$13' )
            // Handle apostrophe.
            .replace( /\’s$|\'s$/, '' )
            .replace( /s\’$|s\'$/, '' )
            .replace( /[\’\']$/, '' )
         );
}; // prelude()

// ### isShort
/**
 * @param {String} s Input string
 * @return {Boolean} `true` if `s` is a short syllable, `false` otherwise
 * @private
 */
var isShort = function ( s ) {
  // (a) a vowel followed by a non-vowel other than w, x or 3 and
  // preceded by a non-vowel, **or** (b) a vowel at the beginning of the word
  // followed by a non-vowel.
  return (
    (
      (
        ( /[^aeiouy][aeiouy][^aeiouywx3]$/ ).test( s ) ||
        ( /^[aeiouy][^aeiouy]{0,1}$/ ).test( s ) // Removed this new changed??
      )
    )
  );
}; // isShort()

// ### markRegions
/**
 * @param {String} s Input string
 * @return {Object} the `R1` and `R2` regions as an object from the input string `s`.
 * @private
 */
var markRegions = function ( s ) {
  // Matches of `R1` and `R2`.
  var m1, m2;
  // To detect regions i.e. `R1` and `R2`.
  var rgxRegions = /[aeiouy]+([^aeiouy]{1}.+)/;
  m1 = rgxRegions.exec( s );
  if ( !m1 ) return ( { r1: '', r2: '' } );
  m1 = m1[ 1 ].slice( 1 );
  // Handle exceptions here to prevent over stemming.
  m1 = ( ( /^(gener|commun|arsen)/ ).test( s ) ) ? s.replace( /^(gener|commun|arsen)(.*)/, '$2') : m1;
  m2 = rgxRegions.exec( m1 );
  if ( !m2 ) return ( { r1: m1, r2: '' } );
  m2 = m2[ 1 ].slice( 1 );
  return ( { r1: m1, r2: m2 } );
}; // markRegions()

// ### step1a
/**
 * @param {String} s Input string
 * @return {String} Processed string
 * @private
 */
var step1a = function ( s ) {
  var wordPart;
  if ( rgxSFXsses.test( s ) ) return ( s.replace( rgxSFXsses, '$1ss' ) );
  if ( rgxSFXiedORies2.test( s ) ) return ( s.replace( rgxSFXiedORies2, '$1i' ) );
  if ( rgxSFXiedORies1.test( s ) ) return ( s.replace( rgxSFXiedORies1, '$1ie' ) );
  if ( rgxSFXusORss.test( s ) ) return ( s );
  wordPart = s.replace( rgxSFXs, '$1' );
  if ( ( /[aeiuouy](.+)$/ ).test( wordPart ) ) return ( s.replace( rgxSFXs, '$1' ) );
  return ( s );
}; // step1a()

// ### step1b
/**
 * @param {String} s Input string
 * @return {String} Processed string
 * @private
 */
var step1b = function ( s ) {
  var rgn = markRegions( s ),
  sd;
  // Search for the longest among the `eedly|eed` suffixes.
  if ( rgxSFXeedlyOReed.test( s ) )
    // Replace by ee if in R1.
    return ( rgxSFXeedlyOReed.test( rgn.r1 ) ? s.replace( rgxSFXeedlyOReed, '$1ee' ) : s );
  // Delete `ed|edly|ingly|ing` if the preceding word part contains a vowel.
  if ( rgxSFXedORedlyORinglyORing.test( s ) ) {
    sd = s.replace( rgxSFXedORedlyORinglyORing, '$1' );
    rgn = markRegions( sd );
    // And after deletion, return either
    return ( rgxSFXatORblORiz.test( sd ) ) ? ( sd + 'e' ) :
            // or
            ( rgxDouble.test( sd ) ) ? ( sd.replace( /.$/, '' ) ) :
              // or
              ( ( isShort( sd ) ) && ( rgn.r1 === '' ) ) ? ( sd + 'e' ) :
                // or
                sd;
  }
  return ( s );
}; // step1b()

// ### step1c
/**
 * @param {String} s Input string
 * @return {String} Processed string
 * @private
 */
var step1c = function ( s ) {
  return ( s.replace( rgxSFXyOR3, '$1i') );
}; // step1c()

// ### step2
/**
 * @param {String} s Input string
 * @return {String} Processed string
 * @private
 */
var step2 = function ( s ) {
  var i, imax,
      rgn = markRegions( s ),
      us; // updated s.
  var match = s.match( rgxSFXstep2 );
  match = ( match === null ) ? '$$$$$' : match[ 1 ];
  if ( rgn.r1.indexOf( match ) !== -1 ) {
    for ( i = 0, imax = rgxSFXstep2WithReplacements.length; i < imax; i += 1 ) {
      us = s.replace( rgxSFXstep2WithReplacements[ i ].rgx, rgxSFXstep2WithReplacements[ i ].replacement );
      if ( s !== us ) return ( us );
    }
  }
  return ( s );
}; // step2()

// ### step3
/**
 * @param {String} s Input string
 * @return {String} Processed string
 * @private
 */
var step3 = function ( s ) {
  var i, imax,
      rgn = markRegions( s ),
      us; // updated s.
  var match = s.match( rgxSFXstep3 );
  match = ( match === null ) ? '$$$$$' : match[ 1 ];

  if ( rgn.r1.indexOf( match ) !== -1 ) {
    for ( i = 0, imax = rgxSFXstep3WithReplacements.length; i < imax; i += 1 ) {
      us = s.replace( rgxSFXstep3WithReplacements[ i ].rgx, rgxSFXstep3WithReplacements[ i ].replacement );
      if ( s !== us ) return ( us );
    }
    if ( ( /ative/ ).test( rgn.r2 ) ) return s.replace( /ative$/, '' );
  }
  return ( s );
}; // step3()

// ### step4
/**
 * @param {String} s Input string
 * @return {String} Processed string
 * @private
 */
var step4 = function ( s ) {
  var rgn = markRegions( s );
  var match = s.match( rgxSFXstep4Full );
  match = ( match === null ) ? '$$$$$' : match[ 1 ];
  if ( rgxSFXstep4Full.test( s ) &&  rgn.r2.indexOf( match ) !== -1 ) {
    return rgxSFXstep4.test( s ) ? s.replace( rgxSFXstep4, '' ) :
    (
      rgxSFXstep4ion.test( s ) ?
      s.replace( rgxSFXstep4ion, '$1$2') :
      s
    );
  }
  return ( s );
}; // step4()

// ### step5
/**
 * @param {String} s Input string
 * @return {String} Processed string
 * @private
 */
var step5 = function ( s ) {
  var preceding, rgn;
  // Search for the `e` suffixes.
  rgn = markRegions( s );
  if ( ( /e$/i ).test( s ) ) {
    preceding = s.replace( /e$/, '' );
    return (
              // Found: delete if in R2, or in R1 and not preceded by a short syllable
              ( /e/ ).test( rgn.r2 ) || ( ( /e/ ).test( rgn.r1 ) && !isShort( preceding ) ) ?
              preceding : s
           );
  }
  // Search for the `l` suffixes.
  if ( ( /l$/ ).test( s ) ) {
    rgn = markRegions( s );
    // Found: delete if in R2
    return ( rgn.r2 && ( /l$/ ).test( rgn.r2 ) ? s.replace( ( /ll$/ ), 'l' ) : s );
  }
  // If nothing happens, must return the string!
  return ( s );
}; // step5()

// ## Public functions
// ### stem
/**
 *
 * Stems an inflected `word` using Porter2 stemming algorithm.
 *
 * @param {string} word — word to be stemmed.
 * @return {string} — the stemmed word.
 *
 * @example
 * stem( 'consisting' );
 * // -> consist
 */
var stem = function ( word ) {
  var str = word.toLowerCase();
  if ( str.length < 3 ) return ( str );
  if ( exceptions1[ str ] ) return ( exceptions1[ str ] );
  str = prelude( str );
  str = step1a( str );

  if ( !rgxException2.test( str ) ) {
    str = step1b( str );
    str = step1c( str );
    str = step2( str );
    str = step3( str );
    str = step4( str );
    str = step5( str );
  }

  str = str.replace( /3/g , 'y' );
  return ( str );
}; // stem()

// Export stem function.
module.exports = stem;

},{}],"../../../node_modules/wink-nlp-utils/src/helper-return-words-filter.js":[function(require,module,exports) {
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of “wink-nlp-utils”.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//

// ## string

// ### returnWordsFilter

/**
 *
 * Returns an object containing the following functions: (a) `set()`, which returns
 * a set of mapped words given in the input array `words`. (b) `exclude()` that
 * is suitable for array filtering operations.
 *
 * If the second argument `mappers` is provided as an array of maping functions
 * then these are applied on the input array before converting into a set. A
 * mapper function must accept a string as argument and return a string as the result.
 * Examples of mapper functions are typically **string** functionss of **`wink-nlp-utils`**
 * such as `string.lowerCase()`, `string.stem()` and
 * `string.soundex()`.
 *
 * @alias helper#returnWordsFilter
 * @param {string[]} words that can be filtered using the returned wordsFilter.
 * @param {function[]} [mappers=undefined] optionally used to map each word before creating
 * the wordsFilter.
 * @return {wordsFilter} object containg `set()` and `exclude()` functions for `words`.
 * @example
 * var stopWords = [ 'This', 'That', 'Are', 'Is', 'Was', 'Will', 'a' ];
 * var myFilter = returnWordsFilter( stopWords, [ string.lowerCase ] );
 * [ 'this', 'is', 'a', 'cat' ].filter( myFilter.exclude );
 * // -> [ 'cat' ]
 */
var returnWordsFilter = function ( words, mappers ) {
  var mappedWords = words;
  var givenMappers = mappers || [];
  givenMappers.forEach( function ( m ) {
    mappedWords = mappedWords.map( m );
  } );

  mappedWords = new Set( mappedWords );

  var exclude = function ( t ) {
    return ( !( mappedWords.has( t ) ) );
  }; // exclude()

  var set = function () {
    return mappedWords;
  }; // set()

  return {
    set: set,
    exclude: exclude
  };
}; // returnWordsFilter()

module.exports = returnWordsFilter;

},{}],"../../../node_modules/wink-nlp-utils/src/helper-return-indexer.js":[function(require,module,exports) {
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of “wink-nlp-utils”.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//

// ## string

// ### returnIndexer

/**
 *
 * Returns an Indexer object that contains two functions. The first function `build()`
 * incrementally builds an index for each `element` using `itsIndex` — both passed as
 * parameters to it. The second function — `result()` allows accessing the index anytime.
 *
 * It is typically used with [string.soc](#stringsoc), [string.bong](#stringbong),
 * [string.song](#stringsong), and [tokens.sow](#tokenssow).
 *
 * @alias helper#returnIndexer
 * @return {indexer} used to build and access the index.
 * @example
 * var indexer = returnIndexer();
 * // -> { build: [function], result: [function] }
 */
var returnIndexer = function () {
  var theIndex = Object.create( null );
  var methods = Object.create( null );

  // Builds index by adding the `element` and `itsIndex`. The `itsIndex` should
  // be a valid JS array index; no validation checks are performed while building
  // index.
  var build = function ( element, itsIndex ) {
    theIndex[ element ] = theIndex[ element ] || [];
    theIndex[ element ].push( itsIndex );
    return true;
  }; // build()

  // Returns the index built so far.
  var result = function () {
    return theIndex;
  }; // result()

  methods.build = build;
  methods.result = result;

  return methods;
}; // index()

module.exports = returnIndexer;

},{}],"../../../node_modules/wink-nlp-utils/src/helper-return-quoted-text-extractor.js":[function(require,module,exports) {
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of “wink-nlp-utils”.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//

// ## string

// ### returnQuotedTextExtractor

/**
 *
 * Returns a function that extracts all occurrences of every quoted text
 * between the `lq` and the `rq` characters from its argument. This argument
 * must be of type string.
 *
 * @alias helper#returnQuotedTextExtractor
 * @param {string} [lq='"'] the left quote character.
 * @param {string} [rq='"'] the right quote character.
 * @return {function} that will accept an input string argument and return an
 * array of all substrings that are quoted between `lq` and `rq`.
 * @example
 * var extractQuotedText = returnQuotedTextExtractor();
 * extractQuotedText( 'Raise 2 issues - "fix a bug" & "run tests"' );
 * // -> [ 'fix a bug', 'run tests' ]
 */
var returnQuotedTextExtractor = function ( lq, rq ) {
  var // Index variable for *for-loop*
      i,
      // Set defaults for left quote, if required.
      lq1 = ( ( lq && ( typeof lq === 'string' ) ) ? lq : '"' ),
      // Extracts its length
      lqLen = lq1.length,
      // The regular expression is created here.
      regex = null,
      // The string containing the regular expression builds here.
      rgxStr = '',
      // Set defaults for right quote, if required.
      rq1 = ( ( rq && ( typeof rq === 'string' ) ) ? rq : lq1 ),
      // Extract its length.
      rqLen = rq1.length;

  // Build `rgxStr`
  for ( i = 0; i < lqLen; i += 1 ) rgxStr += '\\' + lq1.charAt( i );
  rgxStr += '.*?';
  for ( i = 0; i < rqLen; i += 1 ) rgxStr += '\\' + rq1.charAt( i );
  // Create regular expression.
  regex = new RegExp( rgxStr, 'g' );
  // Return the extractor function.
  return ( function ( s ) {
    if ( !s || ( typeof s !== 'string' ) ) return null;
    var // Extracted elements are captured here.
        elements = [],
        // Extract matches with quotes
        matches = s.match( regex );
    if ( !matches || ( matches.length === 0 ) ) return null;
    // Collect elements after removing the quotes.
    for ( var k = 0, kmax = matches.length; k < kmax; k += 1 ) {
      elements.push( matches[ k ].substr( lqLen, matches[ k ].length - ( rqLen + lqLen ) ) );
    }
    return ( elements );
  } );
}; // returnQuotedTextExtractor()

module.exports = returnQuotedTextExtractor;

},{}],"../../../node_modules/wink-nlp-utils/src/string-lower-case.js":[function(require,module,exports) {
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of “wink-nlp-utils”.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//

// ## string

// ### lowerCase
/**
 *
 * Converts the input string to lower case.
 *
 * @alias string#lowerCase
 * @param {string} str the input string.
 * @return {string} input string in lower case.
 * @example
 * lowerCase( 'Lower Case' );
 * // -> 'lower case'
 */
var lowerCase = function ( str ) {
  return ( str.toLowerCase() );
}; // lowerCase()

module.exports = lowerCase;

},{}],"../../../node_modules/wink-nlp-utils/src/string-upper-case.js":[function(require,module,exports) {
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of “wink-nlp-utils”.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//

// ## string

// ### upperCase
/**
 *
 * Converts the input string to upper case.
 *
 * @alias string#upperCase
 * @param {string} str the input string.
 * @return {string} input string in upper case.
 * @example
 * upperCase( 'Upper Case' );
 * // -> 'UPPER CASE'
 */
var upperCase = function ( str ) {
  return ( str.toUpperCase() );
}; // upperCase()

module.exports = upperCase;

},{}],"../../../node_modules/wink-nlp-utils/src/string-trim.js":[function(require,module,exports) {
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of “wink-nlp-utils”.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//

// ## string

// ### trim
/**
 *
 * Trims leading and trailing whitespaces from the input string.
 *
 * @alias string#trim
 * @param {string} str the input string.
 * @return {string} input string with leading & trailing whitespaces removed.
 * @example
 * trim( '  Padded   ' );
 * // -> 'Padded'
 */
var trim = function ( str ) {
  return ( str.trim() );
}; // trim()

module.exports = trim;

},{}],"../../../node_modules/wink-nlp-utils/src/util_regexes.js":[function(require,module,exports) {
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of “wink-nlp-utils”.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
var rgx = Object.create( null );

// Matches standard english punctuations in a text.
rgx.punctuations = /[\’\'\‘\’\`\“\”\"\[\]\(\)\{\}\…\,\.\!\;\?\/\-\:]/ig;
// End Of Sentence Punctuations - useful for splitting text into sentences.
rgx.eosPunctuations = /([\.\?\!])\s*(?=[a-z]|\s+\d)/gi;

// Matches special characters: `* + % # @ ^ = ~ | \` in a text.
rgx.splChars = /[\*\+\%\#\@\^\=\~\|\\]/ig;

// Matches common english elisions including n't.
// These are special ones as 's otherwise may be apostrophe!
rgx.elisionsSpl = /(\b)(it|let|that|who|what|here|there|when|where|why|how)(\'s)\b/gi;
// Single (1) character elisions.
rgx.elisions1 = /([a-z])(\'d|\'m)\b/gi;
// Two (2) character elisions.
rgx.elisions2 = /([a-z])(\'ll|\'ve|\'re|n\'t)\b/gi;
// Sperate not elision 'nt.
rgx.notElision = /([a-z])(n\'t)\b/gi;
// Specially handle cannot
rgx.cannot = /\b(can)(not)\b/gi;

// Matches space, tab, or new line characters in text.
rgx.spaces = /\s+/ig;
// Matches anything other than space, tab, or new line characters.
rgx.notSpace = /\S/g;
// Matches alpha and space characters in a text.
rgx.alphaSpace = /[a-z\s]/ig;
// Matches alphanumerals and space characters in a text.
rgx.alphaNumericSpace = /[a-z0-9\s]/ig;
// Matches non alpha characters in a text.
rgx.notAlpha = /[^a-z]/ig;
// Matches non alphanumerals in a text.
rgx.notAlphaNumeric = /[^a-z0-9]/ig;
// Matches one or more non-words characters.
rgx.nonWords = /\W+/ig;
// Matches complete negation token
rgx.negations = /^(never|none|not|no)$/i;

// Matches run of capital words in a text.
rgx.rocWords = /(?:\b[A-Z][A-Za-z]*\s*){2,}/g;

// Matches integer, decimal, JS floating point numbers in a text.
rgx.number = /[0-9]*\.[0-9]+e[\+\-]{1}[0-9]+|[0-9]*\.[0-9]+|[0-9]+/ig;

// Matches time in 12 hour am/pm format in a text.
rgx.timeIn12HrAMPM = /(?:[0-9]|0[0-9]|1[0-2])((:?:[0-5][0-9])){0,1}\s?(?:[aApP][mM])/ig;

// Matches HTML tags - in fact any thing enclosed in angular brackets including
// the brackets.
rgx.htmlTags = /(?:<[^>]*>)/g;
// Matches the HTML Esc Sequences
// Esc Seq of type `&lt;` or `&nbsp;`
rgx.htmlEscSeq1 = /(?:&[a-z]{2,6};)/gi;
// Esc Seq of type `&#32;`
rgx.htmlEscSeq2 = /(?:&#[0-9]{2,4};)/gi;

// Tests if a given string is possibly in the Indian mobile telephone number format.
rgx.mobileIndian = /^(0|\+91)?[789]\d{9}$/;
// Tests if a given string is in the valid email format.
rgx.email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Extracts any number and text from a <number><text> format text.
// Useful in extracting value and UoM from strings like `2.7 Kgs`.
rgx.separateNumAndText = /([0-9]*\.[0-9]+e[\+\-]{1}[0-9]+|[0-9]*\.[0-9]+|[0-9]+)[\s]*(.*)/i;

// Crude date parser for a string containg date in a valid format.
// > TODO: Need to improve this one!
rgx.date = /(\d+)/ig;

// Following 3 regexes are specially coded for `tokenize()` in prepare_text.
// Matches punctuations that are not a part of a number.
rgx.nonNumPunctuations = /[\.\,\-](?=\D)/gi;
rgx.otherPunctuations = /[\’\'\‘\’\`\“\”\"\[\]\(\)\{\}\…\!\;\?\/\:]/ig;
// > TODO: Add more currency symbols here.
rgx.currency = /[\$\£\¥\€]/ig;

//
module.exports = rgx;

},{}],"../../../node_modules/wink-nlp-utils/src/string-remove-extra-spaces.js":[function(require,module,exports) {
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of “wink-nlp-utils”.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
var rgx = require( './util_regexes.js' );

// ## string

// ### removeExtraSpaces
/**
 *
 * Removes leading, trailing and any extra in-between whitespaces from the input
 * string.
 *
 * @alias string#removeExtraSpaces
 * @param {string} str the input string.
 * @return {string} input string after removal of leading, trailing and extra
 * whitespaces.
 * @example
 * removeExtraSpaces( '   Padded   Text    ' );
 * // -> 'Padded Text'
 */
var removeExtraSpaces = function ( str ) {
  return ( str
            .trim()
            .replace( rgx.spaces, ' ')
         );
}; // removeExtraSpaces()

module.exports = removeExtraSpaces;

},{"./util_regexes.js":"../../../node_modules/wink-nlp-utils/src/util_regexes.js"}],"../../../node_modules/wink-nlp-utils/src/string-retain-alpha-nums.js":[function(require,module,exports) {
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of “wink-nlp-utils”.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
var rgx = require( './util_regexes.js' );

// ## string

// ### retainAlphaNums
/**
 *
 * Retains only apha, numerals, and removes all other characters from
 * the input string, including leading, trailing and extra in-between
 * whitespaces.
 *
 * @alias string#retainAlphaNums
 * @param {string} str the input string.
 * @return {string} input string after removal of non-alphanumeric characters,
 * leading, trailing and extra whitespaces.
 * @example
 * retainAlphaNums( ' This, text here, has  (other) chars_! ' );
 * // -> 'This text here has other chars'
 */
var retainAlphaNums = function ( str ) {
  return ( str
            .replace( rgx.notAlphaNumeric, ' ')
            .replace( rgx.spaces, ' ')
            .trim()
          );
}; // retainAlphaNums()

module.exports = retainAlphaNums;

},{"./util_regexes.js":"../../../node_modules/wink-nlp-utils/src/util_regexes.js"}],"../../../node_modules/wink-nlp-utils/src/name_cleaner_regexes.js":[function(require,module,exports) {
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of “wink-nlp-utils”.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
var degrees = [
  /\bm\.?\s*a\b/i,
  /\bb\.?\s*a\b/i,
  /\bb\.?\s*tech\b/i,
  /\bm\.?\s*tech\b/i,
  /\bb\.?\s*des\b/i,
  /\bm\.?\s*des\b/i,
  /\bm\.?\s*b\.?\s*a\b/i,
  /\bm\.?\s*c\.?\s*a\b/i,
  /\bb\.?\s*c\.?\s*a\b/i,
  /\bl\.?\s*l\.?\s*b\b/i,
  /\bl\.?\s*l\.?\s*m\b/i,
  /\bm\.?\s*b\.?\s*b\.?\s*s\b/i,
  /\bm\.?\s*d\b/i,
  /\bd\.?\s*m\b/i,
  /\bm\.?\s*s\b/i,
  /\bd\.?\s*n\.?\s*b\b/i,
  /\bd\.?\s*g\.?\s*o\b/i,
  /\bd\.?\s*l\.?\s*o\b/i,
  /\bb\.?\s*d\.?\s*s\b/i,
  /\bb\.?\s*h\.?\s*m\.?\s*s\b/i,
  /\bb\.?\s*a\.?\s*m\.?\s*s\b/i,
  /\bf\.?\s*i\.?\s*c\.?\s*s\b/i,
  /\bm\.?\s*n\.?\s*a\.?\s*m\.?\s*s\b/i,
  /\bb\.?\s*e\.?\s*m\.?\s*s\b/i,
  /\bd\.?\s*c\.?\s*h\b/i,
  /\bm\.?\s*c\.?\s*h\b/i,
  /\bf\.?\s*r\.?\s*c\.?\s*s\b/i,
  /\bm\.?\s*r\.?\s*c\.?\s*p\b/i,
  /\bf\.?\s*i\.?\s*a\.?\s*c\.?\s*m\b/i,
  /\bf\.?\s*i\.?\s*m\.?\s*s\.?\s*a\b/i,
  /\bp\.?\s*h\.?\s*d\b/i,
 ];

var titleNames = [ 'mr', 'mrs', 'miss', 'ms', 'master', 'er', 'dr', 'shri', 'shrimati', 'sir' ];

var titles = new RegExp( '^(?:' + titleNames.join( '|' ) + ')$', 'i' );

module.exports = {
  degrees: degrees,
  titles: titles
};

},{}],"../../../node_modules/wink-nlp-utils/src/string-extract-persons-name.js":[function(require,module,exports) {
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of “wink-nlp-utils”.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
var rgx = require( './util_regexes.js' );
var ncrgx = require( './name_cleaner_regexes.js' );

// ## string

// ### extractPersonsName
/**
 *
 * Attempts to extract person's name from input string.
 * It assmues the following name format:<br/>
 * `[<salutations>] <name part as FN [MN] [LN]> [<degrees>]`<br/>
 * Entities in square brackets are optional.
 *
 * @alias string#extractPersonsName
 * @param {string} str the input string.
 * @return {string} extracted name.
 * @example
 * extractPersonsName( 'Dr. Sarah Connor M. Tech., PhD. - AI' );
 * // -> 'Sarah Connor'
 */
var extractPersonsName = function ( str ) {
  // Remove Degrees by making the list of indexes of each degree and subsequently
  // finding the minimum and slicing from there!
  var indexes = ncrgx.degrees.map( function ( r ) {
    var m = r.exec( str );
    return ( m ) ? m.index : 999999;
  } );
  var sp = Math.min.apply( null, indexes );

  // Generate an Array of Every Elelemnt of Name (e.g. title, first name,
  // sir name, honours, etc)
  var aeen = str.slice( 0, sp ).replace( rgx.notAlpha, ' ').replace( rgx.spaces, ' ').trim().split(' ');
  // Remove titles from the beginning.
  while ( aeen.length && ncrgx.titles.test( aeen[0] ) ) aeen.shift();
  return aeen.join(' ');
}; // extractPersonsName()

module.exports = extractPersonsName;

},{"./util_regexes.js":"../../../node_modules/wink-nlp-utils/src/util_regexes.js","./name_cleaner_regexes.js":"../../../node_modules/wink-nlp-utils/src/name_cleaner_regexes.js"}],"../../../node_modules/wink-nlp-utils/src/string-extract-run-of-capital-words.js":[function(require,module,exports) {
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of “wink-nlp-utils”.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
var rgx = require( './util_regexes.js' );
var trim = require( './string-trim.js' );
// ## string

// ### extractRunOfCapitalWords
/**
 *
 * Extracts the array of text appearing as Title Case or in ALL CAPS from the
 * input string.
 *
 * @alias string#extractRunOfCapitalWords
 * @param {string} str the input string.
 * @return {string[]} of text appearing in Title Case or in ALL CAPS; if no such
 * text is found then `null` is returned.
 * @example
 * extractRunOfCapitalWords( 'In The Terminator, Sarah Connor is in Los Angeles' );
 * // -> [ 'In The Terminator', 'Sarah Connor', 'Los Angeles' ]
 */
var extractRunOfCapitalWords = function ( str ) {
  var m = str.match( rgx.rocWords );
  return ( ( m ) ? m.map( trim ) : m );
}; // extractRunOfCapitalWords()

module.exports = extractRunOfCapitalWords;

},{"./util_regexes.js":"../../../node_modules/wink-nlp-utils/src/util_regexes.js","./string-trim.js":"../../../node_modules/wink-nlp-utils/src/string-trim.js"}],"../../../node_modules/wink-nlp-utils/src/string-remove-punctuations.js":[function(require,module,exports) {
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of “wink-nlp-utils”.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
var rgx = require( './util_regexes.js' );

// ## string

// ### removePunctuations
/**
 *
 * Removes each punctuation mark by replacing it with a whitespace. It looks for
 * the following punctuations — `.,;!?:"!'... - () [] {}`.
 *
 * Extra spaces, if required, may be removed using [string.removeExtraSpaces](#stringremoveextraspaces)
 * function.
 *
 * @alias string#removePunctuations
 * @param {string} str the input string.
 * @return {string} input string after removal of punctuations.
 * @example
 * removePunctuations( 'Punctuations like "\'\',;!?:"!... are removed' );
 * // -> 'Punctuations like               are removed'
 */
var removePunctuations = function ( str ) {
  return str.replace( rgx.punctuations, ' ' );
}; // removePunctuations()

module.exports = removePunctuations;

},{"./util_regexes.js":"../../../node_modules/wink-nlp-utils/src/util_regexes.js"}],"../../../node_modules/wink-nlp-utils/src/string-remove-spl-chars.js":[function(require,module,exports) {
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of “wink-nlp-utils”.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
var rgx = require( './util_regexes.js' );

// ## string

// ### removeSplChars
/**
 *
 * Removes each special character by replacing it with a whitespace. It looks for
 * the following special characters — `~@#%^*+=`.
 *
 * Extra spaces, if required, may be removed using [string.removeExtraSpaces](#stringremoveextraspaces)
 * function.
 *
 * @alias string#removeSplChars
 * @param {string} str the input string.
 * @return {string} input string after removal of special characters.
 * @example
 * removeSplChars( '4 + 4*2 = 12' );
 * // -> '4   4 2   12'
 */
var removeSplChars = function ( str ) {
  return str.replace( rgx.splChars, ' ' );
}; // removeSplChars()

module.exports = removeSplChars;

},{"./util_regexes.js":"../../../node_modules/wink-nlp-utils/src/util_regexes.js"}],"../../../node_modules/wink-nlp-utils/src/string-remove-html-tags.js":[function(require,module,exports) {
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of “wink-nlp-utils”.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
var rgx = require( './util_regexes.js' );

// ## string

// ### removeHTMLTags
/**
 *
 * Removes each HTML tag by replacing it with a whitespace.
 *
 * Extra spaces, if required, may be removed using [string.removeExtraSpaces](#stringremoveextraspaces)
 * function.
 *
 * @alias string#removeHTMLTags
 * @param {string} str the input string.
 * @return {string} input string after removal of HTML tags.
 * @example
 * removeHTMLTags( '<p>Vive la France&nbsp;&#160;!</p>' );
 * // -> ' Vive la France  ! '
 */
var removeHTMLTags = function ( str ) {
  return ( str
            .replace( rgx.htmlTags, ' ' )
            .replace( rgx.htmlEscSeq1, ' ' )
            .replace( rgx.htmlEscSeq2, ' ' )
         );
}; // removeHTMLTags()

module.exports = removeHTMLTags;

},{"./util_regexes.js":"../../../node_modules/wink-nlp-utils/src/util_regexes.js"}],"../../../node_modules/wink-nlp-utils/src/string-remove-elisions.js":[function(require,module,exports) {
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of “wink-nlp-utils”.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
var rgx = require( './util_regexes.js' );

// ## string

// ### removeElisions
/**
 *
 * Removes basic elisions found in the input string. Typical example of elisions
 * are `it's, let's, where's, I'd, I'm, I'll, I've, and Isn't` etc. Note it retains
 * apostrophe used to indicate possession.
 *
 * @alias string#removeElisions
 * @param {string} str the input string.
 * @return {string} input string after removal of elisions.
 * @example
 * removeElisions( "someone's wallet, isn't it?" );
 * // -> "someone's wallet, is it?"
 */
var removeElisions = function ( str ) {
  return ( str
            .replace( rgx.elisionsSpl, '$2' )
            .replace( rgx.elisions1, '$1' )
            .replace( rgx.elisions2, '$1' )
         );
}; // removeElisions()

module.exports = removeElisions;

},{"./util_regexes.js":"../../../node_modules/wink-nlp-utils/src/util_regexes.js"}],"../../../node_modules/wink-nlp-utils/src/string-split-elisions.js":[function(require,module,exports) {
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of “wink-nlp-utils”.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
var rgx = require( './util_regexes.js' );

// ## string

// ### splitElisions
/**
 *
 * Splits basic elisions found in the input string. Typical example of elisions
 * are `it's, let's, where's, I'd, I'm, I'll, I've, and Isn't` etc. Note it does
 * not touch apostrophe used to indicate possession.
 *
 * @alias string#splitElisions
 * @param {string} str the input string.
 * @return {string} input string after splitting of elisions.
 * @example
 * splitElisions( "someone's wallet, isn't it?" );
 * // -> "someone's wallet, is n't it?"
 */
var splitElisions = function ( str ) {
  return ( str
            .replace( rgx.elisionsSpl, '$2 $3' )
            .replace( rgx.elisions1, '$1 $2' )
            .replace( rgx.elisions2, '$1 $2' )
         );
}; // splitElisions()

module.exports = splitElisions;

},{"./util_regexes.js":"../../../node_modules/wink-nlp-utils/src/util_regexes.js"}],"../../../node_modules/wink-nlp-utils/src/string-amplify-not-elision.js":[function(require,module,exports) {
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of “wink-nlp-utils”.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
var rgx = require( './util_regexes.js' );

// ## string

// ### amplifyNotElision
/**
 *
 * Amplifies the not elision by converting it into not; for example `isn't`
 * becomes `is not`.
 *
 * @alias string#amplifyNotElision
 * @param {string} str the input string.
 * @return {string} input string after not elision amplification.
 * @example
 * amplifyNotElision( "someone's wallet, isn't it?" );
 * // -> "someone's wallet, is not it?"
 */
var amplifyNotElision = function ( str ) {
  return str.replace( rgx.notElision, '$1 not' );
}; // amplifyNotElision()

module.exports = amplifyNotElision;

},{"./util_regexes.js":"../../../node_modules/wink-nlp-utils/src/util_regexes.js"}],"../../../node_modules/wink-nlp-utils/src/string-marker.js":[function(require,module,exports) {
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of “wink-nlp-utils”.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//

// ## string

// ### marker
/**
 *
 * Generates `marker` of the input string; it is defined as 1-gram, sorted
 * and joined back as a string again. Marker is a quick and aggressive way
 * to detect similarity between short strings. Its aggression may lead to more
 * false positives such as `Meter` and `Metre` or `no melon` and `no lemon`.
 *
 * @alias string#marker
 * @param {string} str the input string.
 * @return {string} the marker.
 * @example
 * marker( 'the quick brown fox jumps over the lazy dog' );
 * // -> ' abcdefghijklmnopqrstuvwxyz'
 */
var marker = function ( str ) {
  var uniqChars = Object.create( null );
  for ( var i = 0, imax = str.length; i < imax; i += 1 ) {
    uniqChars[ str[ i ] ] = true;
  }
  return ( Object.keys( uniqChars ).sort().join('') );
}; // marker()

module.exports = marker;

},{}],"../../../node_modules/wink-nlp-utils/src/string-soc.js":[function(require,module,exports) {
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of “wink-nlp-utils”.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//

// ## string

// ### setOfChars
/**
 *
 * Creates a set of chars from the input string `s`. This is useful
 * in even more aggressive string matching using Jaccard or Tversky compared to
 * `marker()`. It also has an alias **`soc()`**.
 *
 * @alias string#setOfChars
 * @param {string} str the input string.
 * @param {function} [ifn=undefined] a function to build index; it receives the first
 * character of `str` and the `idx` as input arguments. The `build()` function of
 * [helper.returnIndexer](#helperreturnindexer) may be used as `ifn`. If `undefined`
 * then index is not built.
 * @param {number} [idx=undefined] the index; passed as the second argument to the `ifn`
 * function.
 * @return {string} the soc.
 * @example
 * setOfChars( 'the quick brown fox jumps over the lazy dog' );
 * // -> ' abcdefghijklmnopqrstuvwxyz'
 */
var setOfChars = function ( str, ifn, idx ) {
  var cset = new Set( str );
  if ( typeof ifn === 'function' ) {
      ifn( str[ 0 ], idx );
  }
  return ( cset );
}; // soc()

module.exports = setOfChars;

},{}],"../../../node_modules/wink-nlp-utils/src/string-ngram.js":[function(require,module,exports) {
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of “wink-nlp-utils”.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//

// ## string

// ### ngram
/**
 *
 * Generates an array of ngrams of a specified size from the input string. The
 * default size is 2, which means it will generate bigrams by default.
 *
 * @alias string#ngram
 * @param {string} str the input string.
 * @param {number} [size=2] ngram's size.
 * @return {string[]} ngrams of `size` from `str`.
 * @example
 * ngram( 'FRANCE' );
 * // -> [ 'FR', 'RA', 'AN', 'NC', 'CE' ]
 * ngram( 'FRENCH' );
 * // -> [ 'FR', 'RE', 'EN', 'NC', 'CH' ]
 * ngram( 'FRANCE', 3 );
 * // -> [ 'FRA', 'RAN', 'ANC', 'NCE' ]
 */
var ngram = function ( str, size ) {
  var ng = ( size || 2 ),
      ngramz = [],
      tg;
  for ( var i = 0, imax = str.length; i < imax; i += 1 ) {
    tg = str.slice( i, i + ng );
    if ( tg.length === ng ) ngramz.push( tg );
  }
  return ( ngramz );
}; // ngram()

module.exports = ngram;

},{}],"../../../node_modules/wink-nlp-utils/src/string-edge-ngrams.js":[function(require,module,exports) {
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of “wink-nlp-utils”.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//

// ## string

// ### edgeNGrams
/**
 *
 * Generates the edge ngrams from the input string.
 *
 * @alias string#edgeNGrams
 * @param {string} str the input string.
 * @param {number} [min=2] size of ngram generated.
 * @param {number} [max=8] size of ngram is generated.
 * @param {number} [delta=2] edge ngrams are generated in increments of this value.
 * @param {function} [ifn=undefined] a function to build index; it is called for
 * every edge ngram of `str`; and it receives the edge ngram and the `idx`
 * as input arguments. The `build()` function of [helper.returnIndexer](#helperreturnindexer)
 * may be used as `ifn`. If `undefined` then index is not built.
 * @param {number} [idx=undefined] the index; passed as the second argument to the `ifn`
 * function.
 * @return {string[]} of edge ngrams.
 * @example
 * edgeNGrams( 'decisively' );
 * // -> [ 'de', 'deci', 'decisi', 'decisive' ]
 * edgeNGrams( 'decisively', 8, 10, 1 );
 * // -> [ 'decisive', 'decisivel', 'decisively' ]
 */
var edgeNGrams = function ( str, min, max, delta, ifn, idx ) {
  var dlta = ( delta || 2 ),
      eg,
      egs = [],
      imax = Math.min( ( max || 8 ), str.length ) + 1,
      start = ( min || 2 );

  // Generate edge ngrams
  for ( var i = start; i < imax; i += dlta ) {
    eg = str.slice( 0, i );
    egs.push( eg );
    if ( typeof ifn === 'function' ) {
        ifn( eg, idx );
    }
  }
  return ( egs );
}; // edgeNGrams()

module.exports = edgeNGrams;

},{}],"../../../node_modules/wink-nlp-utils/src/string-bong.js":[function(require,module,exports) {
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of “wink-nlp-utils”.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//

// ## string

// ### bagOfNGrams
/**
 *
 * Generates the bag of ngrams of `size` from the input string. The
 * default size is 2, which means it will generate bag of bigrams by default. It
 * also has an alias **`bong()`**.
 *
 * @alias string#bagOfNGrams
 * @param {string} str the input string.
 * @param {number} [size=2] ngram size.
 * @param {function} [ifn=undefined] a function to build index; it is called for
 * every **unique occurrence of ngram** of `str`; and it receives the ngram and the `idx`
 * as input arguments. The `build()` function of [helper.returnIndexer](#helperreturnindexer)
 * may be used as `ifn`. If `undefined` then index is not built.
 * @param {number} [idx=undefined] the index; passed as the second argument to the `ifn`
 * function.
 * @return {object} bag of ngrams of `size` from `str`.
 * @example
 * bagOfNGrams( 'mama' );
 * // -> { ma: 2, am: 1 }
 * bong( 'mamma' );
 * // -> { ma: 2, am: 1, mm: 1 }
 */
var bagOfNGrams = function ( str, size, ifn, idx ) {
  var ng = ( size || 2 ),
      ngBOW = Object.create( null ),
      tg;
  for ( var i = 0, imax = str.length; i < imax; i += 1 ) {
    tg = str.slice( i, i + ng );
    if ( tg.length === ng ) {
      // Call `ifn` iff its defined and `tg` is appearing for the first time;
      // this avoids multiple calls to `ifn`. Strategy applies to `song()`,
      // and `bow()`.
      if ( ( typeof ifn === 'function' ) && !ngBOW[ tg ] ) {
          ifn( tg, idx );
      }
      // Now define, if required and then update counts.
      ngBOW[ tg ] = 1 + ( ngBOW[ tg ] || 0 );
    }
  }
  return ( ngBOW );
}; // bong()

module.exports = bagOfNGrams;

},{}],"../../../node_modules/wink-nlp-utils/src/string-song.js":[function(require,module,exports) {
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of “wink-nlp-utils”.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//

// ## string

// ### setOfNGrams
/**
 *
 * Generates the set of ngrams of `size` from the input string. The
 * default size is 2, which means it will generate set of bigrams by default.
 * It also has an alias **`song()`**.
 *
 * @alias string#setOfNGrams
 * @param {string} str the input string.
 * @param {number} [size=2] ngram size.
 * @param {function} [ifn=undefined] a function to build index; it is called for
 * every **unique occurrence of ngram** of `str`; and it receives the ngram and the `idx`
 * as input arguments. The `build()` function of [helper.returnIndexer](#helperreturnindexer)
 * may be used as `ifn`. If `undefined` then index is not built.
 * @param {number} [idx=undefined] the index; passed as the second argument to the `ifn`
 * function.
 * @return {set} of ngrams of `size` of `str`.
 * @example
 * setOfNGrams( 'mama' );
 * // -> Set { 'ma', 'am' }
 * song( 'mamma' );
 * // -> Set { 'ma', 'am', 'mm' }
 */
var setOfNGrams = function ( str, size, ifn, idx ) {
  var ng = ( size || 2 ),
      ngSet = new Set(),
      tg;
  for ( var i = 0, imax = str.length; i < imax; i += 1 ) {
    tg = str.slice( i, i + ng );
    if ( tg.length === ng ) {
      if ( ( typeof ifn === 'function' ) && !ngSet.has( tg ) ) {
          ifn( tg, idx );
      }
      ngSet.add( tg );
    }
  }
  return ( ngSet );
}; // song()

module.exports = setOfNGrams;

},{}],"../../../node_modules/wink-nlp-utils/src/string-sentences.js":[function(require,module,exports) {
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of “wink-nlp-utils”.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
// Abbreviations with `.` but are never are EOS.
const abbrvNoEOS = Object.create( null );
abbrvNoEOS[ 'mr.' ] = true;
abbrvNoEOS[ 'mrs.' ] = true;
abbrvNoEOS[ 'ms.' ] = true;
abbrvNoEOS[ 'er.' ] = true;
abbrvNoEOS[ 'dr.' ] = true;
abbrvNoEOS[ 'miss.' ] = true;
abbrvNoEOS[ 'shri.' ] = true;
abbrvNoEOS[ 'smt.' ] = true;
abbrvNoEOS[ 'i.e.' ] = true;
abbrvNoEOS[ 'ie.' ] = true;
abbrvNoEOS[ 'e.g.' ] = true;
abbrvNoEOS[ 'eg.' ] = true;
abbrvNoEOS[ 'viz.' ] = true;
abbrvNoEOS[ 'pvt.' ] = true;
// et al.
abbrvNoEOS[ 'et.' ] = true;
abbrvNoEOS[ 'al.' ] = true;
// Mount Kailash!
abbrvNoEOS[ 'mt.' ] = true;
// Pages!
abbrvNoEOS[ 'pp.' ] = true;

const abbrvMayBeEOS = Object.create( null );
abbrvMayBeEOS[ 'inc.' ] = true;
abbrvMayBeEOS[ 'ltd.' ] = true;
abbrvMayBeEOS[ 'al.' ] = true;
// Regex to test potential End-Of-Sentence.
const rgxPotentialEOS = /\.$|\!$|\?$/;
// Regex to test special cases of "I" at eos.
const rgxSplI = /i\?$|i\!$/;
// Regex to test first char as alpha only
const rgxAlphaAt0 = /^[^a-z]/i;

// ## string

// ### sentences
/**
 *
 * Detects the sentence boundaries in the input `paragraph` and splits it into
 * an array of sentence(s).
 *
 * @alias string#sentences
 * @param {string} paragraph the input string.
 * @return {string[]} of sentences.
 * @example
 * sentences( 'AI Inc. is focussing on AI. I work for AI Inc. My mail is r2d2@yahoo.com' );
 * // -> [ 'AI Inc. is focussing on AI.',
 * //      'I work for AI Inc.',
 * //      'My mail is r2d2@yahoo.com' ]
 *
 * sentences( 'U.S.A is my birth place. I was born on 06.12.1924. I climbed Mt. Everest.' );
 * // -> [ 'U.S.A is my birth place.',
 * //      'I was born on 06.12.1924.',
 * //      'I climbed Mt. Everest.' ]
 */
var punkt = function ( paragraph ) {
  // The basic idea is to split the paragraph on `spaces` and thereafter
  // examine each word ending with an EOS punctuation for a possible EOS.

  // Split on **space** to obtain all the `tokens` in the `para`.
  const paraTokens = paragraph.split( ' ' );
  var sentenceTokens = [];
  var sentences = [];

  for ( let k = 0; k < paraTokens.length; k += 1 ) {
    // A para token.
    const pt = paraTokens[ k ];
    // A lower cased para token.
    const lcpt = pt.toLowerCase();
    if ( ( rgxPotentialEOS.test( pt ) ) && !abbrvNoEOS[ lcpt ] && ( pt.length !== 2 || rgxAlphaAt0.test( pt ) || rgxSplI.test( lcpt ) ) ) {
      // Next para token that is non-blank.
      let nextpt;
      // Append this token to the current sentence tokens.
      sentenceTokens.push( pt );
      // If the current token is one of the abbreviations that may also mean EOS.
      if ( abbrvMayBeEOS[ lcpt ] ) {
        for ( let j = k + 1; j < paraTokens.length && !nextpt; j += 1 ) {
          nextpt = paraTokens[ j ];
        }
      }
      // If no next para token or if present then starts from a Cap Letter then
      // only complete sentence and start a new one!
      if ( nextpt === undefined || ( /^[A-Z]/ ).test( nextpt ) ) {
        sentences.push( sentenceTokens.join( ' ' ) );
        sentenceTokens = [];
      }
    } else sentenceTokens.push( pt );
  }

  if ( sentenceTokens.length > 0 ) sentences.push( sentenceTokens.join( ' ' ) );

  return sentences;
}; // punkt()

module.exports = punkt;

},{}],"../../../node_modules/wink-helpers/src/wink-helpers.js":[function(require,module,exports) {
//     wink-helpers
//     Functions for cross validation, shuffle, cartesian product and more
//
//     Copyright (C) 2017-18  GRAYPE Systems Private Limited
//
//     This file is part of “wink-helpers”.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
var helpers = Object.create( null );

// ### Private Functions

// #### Product Reducer (Callback)

// Callback function used by `reduce` inside the `product()` function.
// Follows the standard guidelines of `reduce()` callback function.
var productReducer = function ( prev, curr ) {
  var c,
      cmax = curr.length;
  var p,
      pmax = prev.length;
  var result = [];

  for ( p = 0; p < pmax; p += 1 ) {
    for ( c = 0; c < cmax; c += 1 ) {
      result.push( prev[ p ].concat( curr[ c ] ) );
    }
  }
  return ( result );
}; // productReducer()

// ### Public Function

// ### Array Helpers

helpers.array = Object.create( null);

// #### is Array

// Tests if argument `v` is a JS array; returns `true` if it is, otherwise returns `false`.
helpers.array.isArray = function ( v ) {
  return ( ( v !== undefined ) && ( v !== null ) && ( Object.prototype.toString.call( v ) === '[object Array]' ) );
}; // isArray()


// #### sorting helpers

// Set of helpers to sort either numbers or strings. For key/value pairs,
// the format for each element must be `[ key, value ]`.
// Sort helper to sort an array in ascending order.
helpers.array.ascending = function ( a, b ) {
  return ( a > b ) ? 1 :
            ( a === b ) ? 0 : -1;
}; // ascending()

// Sort helper to sort an array in descending order.
helpers.array.descending = function ( a, b ) {
  return ( b > a ) ? 1 :
            ( b === a ) ? 0 : -1;
}; // descending()

// Sort helper to sort an array of `[ key, value ]` in ascending order by **key**.
helpers.array.ascendingOnKey = function ( a, b ) {
  return ( a[ 0 ] > b[ 0 ] ) ? 1 :
            ( a[ 0 ] === b[ 0 ] ) ? 0 : -1;
}; // ascendingOnKey()

// Sort helper to sort an array of `[ key, value ]` in descending order by **key**.
helpers.array.descendingOnKey = function ( a, b ) {
  return ( b[ 0 ] > a[ 0 ] ) ? 1 :
            ( b[ 0 ] === a[ 0 ] ) ? 0 : -1;
}; // descendingOnKey()

// Sort helper to sort an array of `[ key, value ]` in ascending order by **value**.
helpers.array.ascendingOnValue = function ( a, b ) {
  return ( a[ 1 ] > b[ 1 ] ) ? 1 :
            ( a[ 1 ] === b[ 1 ] ) ? 0 : -1;
}; // ascendingOnValue()

// Sort helper to sort an array of `[ key, value ]` in descending order by **value**.
helpers.array.descendingOnValue = function ( a, b ) {
  return ( b[ 1 ] > a[ 1 ] ) ? 1 :
            ( b[ 1 ] === a[ 1 ] ) ? 0 : -1;
}; // descendingOnValue()

// The following two functions generate a suitable function for sorting on a single
// key or on a composite keys (max 2 only). Just a remider, the generated function
// does not sort on two keys; instead it will sort on a key composed of the two
// accessors.
// Sorts in ascending order on `accessor1` & `accessor2` (optional).
helpers.array.ascendingOn = function ( accessor1, accessor2 ) {
  if ( accessor2 ) {
    return ( function ( a, b ) {
      return ( a[ accessor1 ][ accessor2 ] > b[ accessor1 ][ accessor2 ] ) ? 1 :
              ( a[ accessor1 ][ accessor2 ] === b[ accessor1 ][ accessor2 ] ) ? 0 : -1;
    } );
  }
  return ( function ( a, b ) {
    return ( a[ accessor1 ] > b[ accessor1 ] ) ? 1 :
            ( a[ accessor1 ] === b[ accessor1 ] ) ? 0 : -1;
  } );
}; // ascendingOn()

// Sorts in descending order on `accessor1` & `accessor2` (optional).
helpers.array.descendingOn = function ( accessor1, accessor2 ) {
  if ( accessor2 ) {
    return ( function ( a, b ) {
      return ( b[ accessor1 ][ accessor2 ] > a[ accessor1 ][ accessor2 ] ) ? 1 :
              ( b[ accessor1 ][ accessor2 ] === a[ accessor1 ][ accessor2 ] ) ? 0 : -1;
    } );
  }
  return ( function ( a, b ) {
    return ( b[ accessor1 ] > a[ accessor1 ] ) ? 1 :
            ( b[ accessor1 ] === a[ accessor1 ] ) ? 0 : -1;
  } );
}; // descendingOn()

// #### pluck

// Plucks specified element from each element of an **array of array**, and
// returns the resultant array. The element is specified by `i` (default `0`) and
// number of elements to pluck are defined by `limit` (default `a.length`).
helpers.array.pluck = function ( a, key, limit ) {
  var k, plucked;
  k = a.length;
  var i = key || 0;
  var lim = limit || k;
  if ( lim > k ) lim = k;
  plucked = new Array( lim );
  for ( k = 0; k < lim; k += 1 ) plucked[ k ] = a[ k ][ i ];
  return plucked;
}; // pluck()

// #### product

// Finds the Cartesian Product of arrays present inside the array `a`. Therefore
// the array `a` must be an array of 1-dimensional arrays. For example,
// `product( [ [ 9, 8 ], [ 1, 2 ] ] )`
// will produce `[ [ 9, 1 ], [ 9, 2 ], [ 8, 1 ], [ 8, 2 ] ]`.
helpers.array.product = function ( a ) {
  return (
    a.reduce( productReducer, [ [] ] )
  );
};

// #### shuffle

// Randomly shuffles the elements of an array and returns the same.
// Reference: Chapter on Random Numbers/Shuffling in Seminumerical algorithms.
// The Art of Computer Programming Volume II by Donald E Kunth
helpers.array.shuffle = function ( array ) {
  var a = array;
  var balance = a.length;
  var candidate;
  var temp;

  while ( balance ) {
    candidate = Math.floor( Math.random() * balance );
    balance -= 1;

    temp = a[ balance ];
    a[ balance ] = a[ candidate ];
    a[ candidate ] = temp;
  }

  return ( a );
};


// ### Object Helpers

var objectKeys = Object.keys;
var objectCreate = Object.create;

helpers.object = Object.create( null );

// #### is Object

// Tests if argument `v` is a JS object; returns `true` if it is, otherwise returns `false`.
helpers.object.isObject = function ( v ) {
  return ( v && ( Object.prototype.toString.call( v ) === '[object Object]' ) ) ? true : false; // eslint-disable-line no-unneeded-ternary

}; // isObject()

// #### keys

// Returns keys of the `obj` in an array.
helpers.object.keys = function ( obj ) {
  return ( objectKeys( obj ) );
}; // keys()

// #### size

// Returns the number of keys of the `obj`.
helpers.object.size = function ( obj ) {
  return ( ( objectKeys( obj ) ).length );
}; // size()

// #### values

// Returns all values from each key/value pair of the `obj` in an array.
helpers.object.values = function ( obj ) {
  var keys = helpers.object.keys( obj );
  var length = keys.length;
  var values = new Array( length );
  for ( var i = 0; i < length; i += 1 ) {
    values[ i ] = obj[ keys[ i ] ];
  }
  return values;
}; // values()

// #### value Freq

// Returns the frequency of each unique value present in the `obj`, where the
// **key** is the *value* and **value** is the *frequency*.
helpers.object.valueFreq = function ( obj ) {
  var keys = helpers.object.keys( obj );
  var length = keys.length;
  var val;
  var vf = objectCreate( null );
  for ( var i = 0; i < length; i += 1 ) {
    val = obj[ keys[ i ] ];
    vf[ val ] = 1 + ( vf[ val ] || 0 );
  }
  return vf;
}; // valueFreq()

// #### table

// Converts the `obj` in to an array of `[ key, value ]` pairs in form of a table.
// Second argument - `f` is optional and it is a function, which is called with
// each `value`.
helpers.object.table = function ( obj, f ) {
  var keys = helpers.object.keys( obj );
  var length = keys.length;
  var pairs = new Array( length );
  var ak, av;
  for ( var i = 0; i < length; i += 1 ) {
    ak = keys[ i ];
    av = obj[ ak ];
    if ( typeof f === 'function' ) f( av );
    pairs[ i ] = [ ak, av ];
  }
  return pairs;
}; // table()

// ### Validation Helpers

helpers.validate = Object.create( null );

// Create aliases for isObject and isArray.
helpers.validate.isObject = helpers.object.isObject;
helpers.validate.isArray = helpers.array.isArray;

// #### isFiniteInteger

// Validates if `n` is a finite integer.
helpers.validate.isFiniteInteger = function ( n ) {
  return (
    ( typeof n === 'number' ) &&
    !isNaN( n ) &&
    isFinite( n ) &&
    ( n === Math.round( n ) )
  );
}; // isFiniteInteger()

// #### isFiniteNumber

// Validates if `n` is a valid number.
helpers.validate.isFiniteNumber = function ( n ) {
  return (
    ( typeof n === 'number' ) &&
    !isNaN( n ) &&
    isFinite( n )
  );
}; // isFiniteNumber()

// ### cross validation
/**
 *
 * Creates an instance of cross validator useful for machine learning tasks.
 *
 * @param {string[]} classLabels - array containing all the class labels.
 * @return {methods} object conatining set of API methods for tasks like evalutaion,
 * reset and metrics generation.
*/
helpers.validate.cross = function ( classLabels ) {
  // wink's const for unknown predictions!
  const unknown = 'unknown';
  // To ensure that metrics is not computed prior to evaluation.
  var evaluated = false;
  // The confusion matrix.
  var cm;
  var precision;
  var recall;
  var fmeasure;

  // The class labels is assigned to this variable.
  var labels;
  // The length of `labels` array.
  var labelCount;
  var labelsObj = Object.create( null );

  // Returned!
  var methods = Object.create( null );


  /**
   *
   * Resets the current instance for another round of evaluation; the class
   * labels defined at instance creation time are not touched.
   *
   * @return {undefined} nothing!
  */
  var reset = function ( ) {
    evaluated = false;
    cm = Object.create( null );
    precision = Object.create( null );
    recall = Object.create( null );
    fmeasure = Object.create( null );

    // Initialize confusion matrix and metrics.
    for ( let i = 0; i < labelCount; i += 1 ) {
      const row = labels[ i ];
      labelsObj[ row ] = true;
      cm[ row ] = Object.create( null );
      precision[ row ] = 0;
      recall[ row ] = 0;
      fmeasure[ row ] = 0;
      for ( let j = 0; j < labelCount; j += 1 ) {
        const col = labels[ j ];
        cm[ row ][ col ] = 0;
      }
    }
  }; // reset()

  /**
   *
   * Creates an instance of cross validator useful for machine learning tasks.
   *
   * @param {string} truth - the actual class label.
   * @param {string} guess - the predicted class label.
   * @return {boolean} returns true if the evaluation is successful. The evaluation
   * may fail if `truth` or `guess` is not in the array `classLabels` provided at
   * instance creation time; or if guess is equal to `unknown`.
  */
  var evaluate = function ( truth, guess ) {
    // If prediction failed then return false!
    if ( guess === unknown || !labelsObj[ truth ] || !labelsObj[ guess ] ) return false;
    // Update confusion matrix.
    if ( guess === truth ) {
      cm[ truth ][ guess ] += 1;
    } else {
      cm[ guess ][ truth ] += 1;
    }
    evaluated = true;
    return true;
  }; // evaluate()

  /**
   *
   * It computes a detailed metrics consisting of macro-averaged precision,
   * recall and f-measure along with their label-wise values and the confusion
   * matrix.
   *
   * @return {object} object containing macro-averaged `avgPrecision`, `avgRecall`,
   * `avgFMeasure` values along with other details such as label-wise values
   * and the confusion matrix. A value of `null` is returned if no evaluate()
   * has been called before.
  */
  var metrics = function ( ) {
    if ( !evaluated ) return null;
    // Numerators for every label; they are same for precision & recall both.
    var n = Object.create( null );
    // Only denominators differs for precision & recall
    var pd = Object.create( null );
    var rd = Object.create( null );
    // `row` and `col` of confusion matrix.
    var col, row;
    var i, j;
    // Macro average values for metrics.
    var avgPrecision = 0;
    var avgRecall = 0;
    var avgFMeasure = 0;

    // Compute label-wise numerators & denominators!
    for ( i = 0; i < labelCount; i += 1 ) {
      row = labels[ i ];
      for ( j = 0; j < labelCount; j += 1 ) {
        col = labels[ j ];
        if ( row === col ) {
          n[ row ] = cm[ row ][ col ];
        }
        pd[ row ] = cm[ row ][ col ] + ( pd[ row ] || 0 );
        rd[ row ] = cm[ col ][ row ] + ( rd[ row ] || 0 );
      }
    }
    // Ready to compute metrics.
    for ( i = 0; i < labelCount; i += 1 ) {
      row = labels[ i ];
      precision[ row ] = +( n[ row ] / pd[ row ] ).toFixed( 4 );
      // NaN can occur if a label has not been encountered.
      if ( isNaN( precision[ row ] ) ) precision[ row ] = 0;

      recall[ row ] = +( n[ row ] / rd[ row ] ).toFixed( 4 );
      if ( isNaN( recall[ row ] ) ) recall[ row ] = 0;

      fmeasure[ row ] = +( 2 * precision[ row ] * recall[ row ] / ( precision[ row ] + recall[ row ] ) ).toFixed( 4 );
      if ( isNaN( fmeasure[ row ] ) ) fmeasure[ row ] = 0;
    }
    // Compute thier averages, note they will be macro avegages.
    for ( i = 0; i < labelCount; i += 1 ) {
      avgPrecision += ( precision[ labels[ i ] ] / labelCount );
      avgRecall += ( recall[ labels[ i ] ] / labelCount );
      avgFMeasure += ( fmeasure[ labels[ i ] ] / labelCount );
    }
    // Return metrics.
    return (
      {
        // Macro-averaged metrics.
        avgPrecision: +avgPrecision.toFixed( 4 ),
        avgRecall: +avgRecall.toFixed( 4 ),
        avgFMeasure: +avgFMeasure.toFixed( 4 ),
        details: {
          // Confusion Matrix.
          confusionMatrix: cm,
          // Label wise metrics details, from those averages were computed.
          precision: precision,
          recall: recall,
          fmeasure: fmeasure
        }
      }
    );
  }; // metrics()

  if ( !helpers.validate.isArray( classLabels ) ) {
    throw Error( 'cross validate: class labels must be an array.' );
  }
  if ( classLabels.length < 2 ) {
    throw Error( 'cross validate: at least 2 class labels are required.' );
  }
  labels = classLabels;
  labelCount = labels.length;

  reset();

  methods.reset = reset;
  methods.evaluate = evaluate;
  methods.metrics = metrics;

  return methods;
}; // cross()

// ### Object Helpers

helpers.string = Object.create( null );

// Regex for [diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) removal.
var rgxDiacritical = /[\u0300-\u036f]/g;

/**
 *
 * Normalizes the token's value by converting it to lower case and stripping
 * the diacritical marks (if any).
 *
 * @param {string} str — that needs to be normalized.
 * @return {string} the normalized value.
 * @example
 * normalize( 'Nestlé' );
 * // -> nestle
*/
helpers.string.normalize = function ( str ) {
  return (
    str.toLowerCase().normalize( 'NFD' ).replace( rgxDiacritical, '' )
  );
}; // normalize()

module.exports = helpers;

},{}],"../../../node_modules/wink-nlp-utils/src/string-compose-corpus.js":[function(require,module,exports) {
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of “wink-nlp-utils”.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
var helpers = require( 'wink-helpers' );
var returnQuotedTextExtractor = require( './helper-return-quoted-text-extractor.js' );
var extractQuotedText = returnQuotedTextExtractor( '[', ']' );
// ## string

// ### composeCorpus
/**
 *
 * Generates all possible sentences from the input argument string.
 * The string s must follow a special syntax as illustrated in the
 * example below:<br/>
 * `'[I] [am having|have] [a] [problem|question]'`<br/>
 *
 * Each phrase must be quoted between `[ ]` and each possible option of phrases
 * (if any) must be separated by a `|` character. The corpus is composed by
 * computing the cartesian product of all the phrases.
 *
 * @alias string#composeCorpus
 * @param {string} str the input string.
 * @return {string[]} of all possible sentences.
 * @example
 * composeCorpus( '[I] [am having|have] [a] [problem|question]' );
 * // -> [ 'I am having a problem',
 * //      'I am having a question',
 * //      'I have a problem',
 * //      'I have a question' ]
 */
var composeCorpus = function ( str ) {
  if ( !str || ( typeof str !== 'string' ) ) return [];

  var quotedTextElems = extractQuotedText( str );
  var corpus = [];
  var finalCorpus = [];

  if ( !quotedTextElems ) return [];
  quotedTextElems.forEach( function ( e ) {
    corpus.push( e.split( '|' ) );
  } );

  helpers.array.product( corpus ).forEach( function ( e ) {
    finalCorpus.push( e.join( ' ' ) );
  } );
  return ( finalCorpus );
}; // composeCorpus()

module.exports = composeCorpus;

},{"wink-helpers":"../../../node_modules/wink-helpers/src/wink-helpers.js","./helper-return-quoted-text-extractor.js":"../../../node_modules/wink-nlp-utils/src/helper-return-quoted-text-extractor.js"}],"../../../node_modules/wink-nlp-utils/src/string-tokenize0.js":[function(require,module,exports) {
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of “wink-nlp-utils”.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
var removeElisions = require( './string-remove-elisions.js' );
var amplifyNotElision = require( './string-amplify-not-elision.js' );
var rgx = require( './util_regexes.js' );

// ## string

// ### tokenize0
/**
 *
 * Tokenizes by splitting the input string on **non-words**. This means tokens would
 * consists of only alphas, numerals and underscores; all other characters will
 * be stripped as they are treated as separators. It also removes all elisions;
 * however negations are retained and amplified.
 *
 * @alias string#tokenize0
 * @param {string} str the input string.
 * @return {string[]} of tokens.
 * @example
 * tokenize0( "someone's wallet, isn't it?" );
 * // -> [ 'someone', 's', 'wallet', 'is', 'not', 'it' ]
 */
var tokenize0 = function ( str ) {
  var tokens = removeElisions( amplifyNotElision( str ) )
                .replace( rgx.cannot, '$1 $2' )
                .split( rgx.nonWords );
  // Check the 0th and last element of array for empty string because if
  // fisrt/last characters are non-words then these will be empty stings!
  if ( tokens[ 0 ] === '' ) tokens.shift();
  if ( tokens[ tokens.length - 1 ] === '' ) tokens.pop();
  return tokens;
}; // tokenize0()

module.exports = tokenize0;

},{"./string-remove-elisions.js":"../../../node_modules/wink-nlp-utils/src/string-remove-elisions.js","./string-amplify-not-elision.js":"../../../node_modules/wink-nlp-utils/src/string-amplify-not-elision.js","./util_regexes.js":"../../../node_modules/wink-nlp-utils/src/util_regexes.js"}],"../../../node_modules/wink-tokenizer/node_modules/emoji-regex/index.js":[function(require,module,exports) {
"use strict";

module.exports = function () {
  // https://mths.be/emoji
  return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC68(?:\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83E\uDDD1(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])(?:\uD83C[\uDFFB-\uDFFE])|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83E\uDDD1(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC3B\u200D\u2744|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E-\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3C-\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDF])\u200D[\u2640\u2642])\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
};

},{}],"../../../node_modules/wink-tokenizer/src/eng-contractions.js":[function(require,module,exports) {
//     wink-tokenizer
//     Multilingual tokenizer that automatically tags each token with its type.
//
//     Copyright (C) 2017-20  GRAYPE Systems Private Limited
//
//     This file is part of “wink-tokenizer”.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

var contractions = Object.create( null );

// Tag - word.
var word = 'word';
// Verbs.
contractions[ 'can\'t' ] = [ { value: 'ca', tag: word }, { value: 'n\'t', tag: word } ];
contractions[ 'CAN\'T' ] = [ { value: 'CA', tag: word }, { value: 'N\'T', tag: word } ];
contractions[ 'Can\'t' ] = [ { value: 'Ca', tag: word }, { value: 'n\'t', tag: word } ];

contractions[ 'Couldn\'t' ] = [ { value: 'could', tag: word }, { value: 'n\'t', tag: word } ];
contractions[ 'COULDN\'T' ] = [ { value: 'COULD', tag: word }, { value: 'N\'T', tag: word } ];
contractions[ 'Couldn\'t' ] = [ { value: 'Could', tag: word }, { value: 'n\'t', tag: word } ];

contractions[ 'don\'t' ] = [ { value: 'do', tag: word }, { value: 'n\'t', tag: word } ];
contractions[ 'DON\'T' ] = [ { value: 'DO', tag: word }, { value: 'N\'T', tag: word } ];
contractions[ 'Don\'t' ] = [ { value: 'Do', tag: word }, { value: 'n\'t', tag: word } ];

contractions[ 'doesn\'t' ] = [ { value: 'does', tag: word }, { value: 'n\'t', tag: word } ];
contractions[ 'DOESN\'T' ] = [ { value: 'DOES', tag: word }, { value: 'N\'T', tag: word } ];
contractions[ 'Doesn\'t' ] = [ { value: 'Does', tag: word }, { value: 'n\'t', tag: word } ];

contractions[ 'didn\'t' ] = [ { value: 'did', tag: word }, { value: 'n\'t', tag: word } ];
contractions[ 'DIDN\'T' ] = [ { value: 'DID', tag: word }, { value: 'N\'T', tag: word } ];
contractions[ 'Didn\'t' ] = [ { value: 'Did', tag: word }, { value: 'n\'t', tag: word } ];

contractions[ 'hadn\'t' ] = [ { value: 'had', tag: word }, { value: 'n\'t', tag: word } ];
contractions[ 'HADN\'T' ] = [ { value: 'HAD', tag: word }, { value: 'N\'T', tag: word } ];
contractions[ 'Hadn\'t' ] = [ { value: 'Had', tag: word }, { value: 'n\'t', tag: word } ];

contractions[ 'mayn\'t' ] = [ { value: 'may', tag: word }, { value: 'n\'t', tag: word } ];
contractions[ 'MAYN\'T' ] = [ { value: 'MAY', tag: word }, { value: 'N\'T', tag: word } ];
contractions[ 'Mayn\'t' ] = [ { value: 'May', tag: word }, { value: 'n\'t', tag: word } ];

contractions[ 'mightn\'t' ] = [ { value: 'might', tag: word }, { value: 'n\'t', tag: word } ];
contractions[ 'MIGHTN\'T' ] = [ { value: 'MIGHT', tag: word }, { value: 'N\'T', tag: word } ];
contractions[ 'Mightn\'t' ] = [ { value: 'Might', tag: word }, { value: 'n\'t', tag: word } ];

contractions[ 'mustn\'t' ] = [ { value: 'must', tag: word }, { value: 'n\'t', tag: word } ];
contractions[ 'MUSTN\'T' ] = [ { value: 'MUST', tag: word }, { value: 'N\'T', tag: word } ];
contractions[ 'Mustn\'t' ] = [ { value: 'Must', tag: word }, { value: 'n\'t', tag: word } ];

contractions[ 'needn\'t' ] = [ { value: 'need', tag: word }, { value: 'n\'t', tag: word } ];
contractions[ 'NEEDN\'T' ] = [ { value: 'NEED', tag: word }, { value: 'N\'T', tag: word } ];
contractions[ 'Needn\'t' ] = [ { value: 'Need', tag: word }, { value: 'n\'t', tag: word } ];

contractions[ 'oughtn\'t' ] = [ { value: 'ought', tag: word }, { value: 'n\'t', tag: word } ];
contractions[ 'OUGHTN\'T' ] = [ { value: 'OUGHT', tag: word }, { value: 'N\'T', tag: word } ];
contractions[ 'Oughtn\'t' ] = [ { value: 'Ought', tag: word }, { value: 'n\'t', tag: word } ];

contractions[ 'shan\'t' ] = [ { value: 'sha', tag: word }, { value: 'n\'t', tag: word } ];
contractions[ 'SHAN\'T' ] = [ { value: 'SHA', tag: word }, { value: 'N\'T', tag: word } ];
contractions[ 'Shan\'t' ] = [ { value: 'Sha', tag: word }, { value: 'n\'t', tag: word } ];

contractions[ 'shouldn\'t' ] = [ { value: 'should', tag: word }, { value: 'n\'t', tag: word } ];
contractions[ 'SHOULDN\'T' ] = [ { value: 'SHOULD', tag: word }, { value: 'N\'T', tag: word } ];
contractions[ 'Shouldn\'t' ] = [ { value: 'Should', tag: word }, { value: 'n\'t', tag: word } ];

contractions[ 'won\'t' ] = [ { value: 'wo', tag: word }, { value: 'n\'t', tag: word } ];
contractions[ 'WON\'T' ] = [ { value: 'WO', tag: word }, { value: 'N\'T', tag: word } ];
contractions[ 'Won\'t' ] = [ { value: 'Wo', tag: word }, { value: 'n\'t', tag: word } ];

contractions[ 'wouldn\'t' ] = [ { value: 'would', tag: word }, { value: 'n\'t', tag: word } ];
contractions[ 'WOULDN\'T' ] = [ { value: 'WOULD', tag: word }, { value: 'N\'T', tag: word } ];
contractions[ 'Wouldn\'t' ] = [ { value: 'Would', tag: word }, { value: 'n\'t', tag: word } ];

contractions[ 'ain\'t' ] = [ { value: 'ai', tag: word }, { value: 'n\'t', tag: word } ];
contractions[ 'AIN\'T' ] = [ { value: 'AI', tag: word }, { value: 'N\'T', tag: word } ];
contractions[ 'Ain\'t' ] = [ { value: 'Ai', tag: word }, { value: 'n\'t', tag: word } ];

contractions[ 'aren\'t' ] = [ { value: 'are', tag: word }, { value: 'n\'t', tag: word } ];
contractions[ 'AREN\'T' ] = [ { value: 'ARE', tag: word }, { value: 'N\'T', tag: word } ];
contractions[ 'Aren\'t' ] = [ { value: 'Are', tag: word }, { value: 'n\'t', tag: word } ];

contractions[ 'isn\'t' ] = [ { value: 'is', tag: word }, { value: 'n\'t', tag: word } ];
contractions[ 'ISN\'T' ] = [ { value: 'IS', tag: word }, { value: 'N\'T', tag: word } ];
contractions[ 'Isn\'t' ] = [ { value: 'Is', tag: word }, { value: 'n\'t', tag: word } ];

contractions[ 'wasn\'t' ] = [ { value: 'was', tag: word }, { value: 'n\'t', tag: word } ];
contractions[ 'WASN\'T' ] = [ { value: 'WAS', tag: word }, { value: 'N\'T', tag: word } ];
contractions[ 'Wasn\'t' ] = [ { value: 'Was', tag: word }, { value: 'n\'t', tag: word } ];

contractions[ 'weren\'t' ] = [ { value: 'were', tag: word }, { value: 'n\'t', tag: word } ];
contractions[ 'WEREN\'T' ] = [ { value: 'WERE', tag: word }, { value: 'N\'T', tag: word } ];
contractions[ 'Weren\'t' ] = [ { value: 'Were', tag: word }, { value: 'n\'t', tag: word } ];

contractions[ 'haven\'t' ] = [ { value: 'have', tag: word }, { value: 'n\'t', tag: word } ];
contractions[ 'HAVEN\'T' ] = [ { value: 'HAVE', tag: word }, { value: 'N\'T', tag: word } ];
contractions[ 'Haven\'t' ] = [ { value: 'Have', tag: word }, { value: 'n\'t', tag: word } ];

contractions[ 'hasn\'t' ] = [ { value: 'has', tag: word }, { value: 'n\'t', tag: word } ];
contractions[ 'HASN\'T' ] = [ { value: 'HAS', tag: word }, { value: 'N\'T', tag: word } ];
contractions[ 'Hasn\'t' ] = [ { value: 'Has', tag: word }, { value: 'n\'t', tag: word } ];

contractions[ 'daren\'t' ] = [ { value: 'dare', tag: word }, { value: 'n\'t', tag: word } ];
contractions[ 'DAREN\'T' ] = [ { value: 'DARE', tag: word }, { value: 'N\'T', tag: word } ];
contractions[ 'Daren\'t' ] = [ { value: 'Dare', tag: word }, { value: 'n\'t', tag: word } ];


// Pronouns like I, you, they, we, she, and he.
contractions[ 'i\'m' ] = [ { value: 'i', tag: word }, { value: '\'m', tag: word } ];
contractions[ 'I\'M' ] = [ { value: 'I', tag: word }, { value: '\'M', tag: word } ];
contractions[ 'I\'m' ] = [ { value: 'I', tag: word }, { value: '\'m', tag: word } ];

contractions[ 'i\'ve' ] = [ { value: 'i', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'I\'VE' ] = [ { value: 'I', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'I\'ve' ] = [ { value: 'I', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'i\'d' ] = [ { value: 'i', tag: word }, { value: '\'d', tag: word } ];
contractions[ 'I\'D' ] = [ { value: 'I', tag: word }, { value: '\'D', tag: word } ];
contractions[ 'I\'d' ] = [ { value: 'I', tag: word }, { value: '\'d', tag: word } ];

contractions[ 'i\'ll' ] = [ { value: 'i', tag: word }, { value: '\'ll', tag: word } ];
contractions[ 'I\'LL' ] = [ { value: 'I', tag: word }, { value: '\'LL', tag: word } ];
contractions[ 'I\'ll' ] = [ { value: 'I', tag: word }, { value: '\'ll', tag: word } ];

contractions[ 'you\'ve' ] = [ { value: 'you', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'YOU\'VE' ] = [ { value: 'YOU', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'You\'ve' ] = [ { value: 'You', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'you\'d' ] = [ { value: 'you', tag: word }, { value: '\'d', tag: word } ];
contractions[ 'YOU\'D' ] = [ { value: 'YOU', tag: word }, { value: '\'D', tag: word } ];
contractions[ 'You\'d' ] = [ { value: 'You', tag: word }, { value: '\'d', tag: word } ];

contractions[ 'you\'ll' ] = [ { value: 'you', tag: word }, { value: '\'ll', tag: word } ];
contractions[ 'YOU\'LL' ] = [ { value: 'YOU', tag: word }, { value: '\'LL', tag: word } ];
contractions[ 'You\'ll' ] = [ { value: 'You', tag: word }, { value: '\'ll', tag: word } ];

// they - 've, 'd, 'll, 're
contractions[ 'they\'ve' ] = [ { value: 'they', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'THEY\'VE' ] = [ { value: 'THEY', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'They\'ve' ] = [ { value: 'They', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'they\'d' ] = [ { value: 'they', tag: word }, { value: '\'d', tag: word } ];
contractions[ 'THEY\'D' ] = [ { value: 'THEY', tag: word }, { value: '\'D', tag: word } ];
contractions[ 'They\'d' ] = [ { value: 'They', tag: word }, { value: '\'d', tag: word } ];

contractions[ 'they\'ll' ] = [ { value: 'they', tag: word }, { value: '\'ll', tag: word } ];
contractions[ 'THEY\'LL' ] = [ { value: 'THEY', tag: word }, { value: '\'LL', tag: word } ];
contractions[ 'They\'ll' ] = [ { value: 'They', tag: word }, { value: '\'ll', tag: word } ];

contractions[ 'they\'re' ] = [ { value: 'they', tag: word }, { value: '\'re', tag: word } ];
contractions[ 'THEY\'RE' ] = [ { value: 'THEY', tag: word }, { value: '\'RE', tag: word } ];
contractions[ 'They\'re' ] = [ { value: 'They', tag: word }, { value: '\'re', tag: word } ];

contractions[ 'we\'ve' ] = [ { value: 'we', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'WE\'VE' ] = [ { value: 'WE', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'We\'ve' ] = [ { value: 'We', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'we\'d' ] = [ { value: 'we', tag: word }, { value: '\'d', tag: word } ];
contractions[ 'WE\'D' ] = [ { value: 'WE', tag: word }, { value: '\'D', tag: word } ];
contractions[ 'We\'d' ] = [ { value: 'We', tag: word }, { value: '\'d', tag: word } ];

contractions[ 'we\'ll' ] = [ { value: 'we', tag: word }, { value: '\'ll', tag: word } ];
contractions[ 'WE\'LL' ] = [ { value: 'WE', tag: word }, { value: '\'LL', tag: word } ];
contractions[ 'We\'ll' ] = [ { value: 'We', tag: word }, { value: '\'ll', tag: word } ];

contractions[ 'we\'re' ] = [ { value: 'we', tag: word }, { value: '\'re', tag: word } ];
contractions[ 'WE\'RE' ] = [ { value: 'WE', tag: word }, { value: '\'RE', tag: word } ];
contractions[ 'We\'re' ] = [ { value: 'We', tag: word }, { value: '\'re', tag: word } ];

contractions[ 'she\'d' ] = [ { value: 'she', tag: word }, { value: '\'d', tag: word } ];
contractions[ 'SHE\'D' ] = [ { value: 'SHE', tag: word }, { value: '\'D', tag: word } ];
contractions[ 'She\'d' ] = [ { value: 'She', tag: word }, { value: '\'d', tag: word } ];

contractions[ 'she\'ll' ] = [ { value: 'she', tag: word }, { value: '\'ll', tag: word } ];
contractions[ 'SHE\'LL' ] = [ { value: 'SHE', tag: word }, { value: '\'LL', tag: word } ];
contractions[ 'She\'ll' ] = [ { value: 'She', tag: word }, { value: '\'ll', tag: word } ];

contractions[ 'she\'s' ] = [ { value: 'she', tag: word }, { value: '\'s', tag: word } ];
contractions[ 'SHE\'S' ] = [ { value: 'SHE', tag: word }, { value: '\'S', tag: word } ];
contractions[ 'She\'s' ] = [ { value: 'She', tag: word }, { value: '\'s', tag: word } ];

contractions[ 'he\'d' ] = [ { value: 'he', tag: word }, { value: '\'d', tag: word } ];
contractions[ 'HE\'D' ] = [ { value: 'HE', tag: word }, { value: '\'D', tag: word } ];
contractions[ 'He\'d' ] = [ { value: 'He', tag: word }, { value: '\'d', tag: word } ];

contractions[ 'he\'ll' ] = [ { value: 'he', tag: word }, { value: '\'ll', tag: word } ];
contractions[ 'HE\'LL' ] = [ { value: 'HE', tag: word }, { value: '\'LL', tag: word } ];
contractions[ 'He\'ll' ] = [ { value: 'He', tag: word }, { value: '\'ll', tag: word } ];

contractions[ 'he\'s' ] = [ { value: 'he', tag: word }, { value: '\'s', tag: word } ];
contractions[ 'HE\'S' ] = [ { value: 'HE', tag: word }, { value: '\'S', tag: word } ];
contractions[ 'He\'s' ] = [ { value: 'He', tag: word }, { value: '\'s', tag: word } ];

contractions[ 'it\'d' ] = [ { value: 'it', tag: word }, { value: '\'d', tag: word } ];
contractions[ 'IT\'D' ] = [ { value: 'IT', tag: word }, { value: '\'D', tag: word } ];
contractions[ 'It\'d' ] = [ { value: 'It', tag: word }, { value: '\'d', tag: word } ];

contractions[ 'it\'ll' ] = [ { value: 'it', tag: word }, { value: '\'ll', tag: word } ];
contractions[ 'IT\'LL' ] = [ { value: 'IT', tag: word }, { value: '\'LL', tag: word } ];
contractions[ 'It\'ll' ] = [ { value: 'It', tag: word }, { value: '\'ll', tag: word } ];

contractions[ 'it\'s' ] = [ { value: 'it', tag: word }, { value: '\'s', tag: word } ];
contractions[ 'IT\'S' ] = [ { value: 'IT', tag: word }, { value: '\'S', tag: word } ];
contractions[ 'It\'s' ] = [ { value: 'It', tag: word }, { value: '\'s', tag: word } ];

// Wh Pronouns - what, who, when, where, why, how, there, that
contractions[ 'what\'ve' ] = [ { value: 'what', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'WHAT\'VE' ] = [ { value: 'WHAT', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'What\'ve' ] = [ { value: 'What', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'what\'d' ] = [ { value: 'what', tag: word }, { value: '\'d', tag: word } ];
contractions[ 'WHAT\'D' ] = [ { value: 'WHAT', tag: word }, { value: '\'D', tag: word } ];
contractions[ 'What\'d' ] = [ { value: 'What', tag: word }, { value: '\'d', tag: word } ];

contractions[ 'what\'ll' ] = [ { value: 'what', tag: word }, { value: '\'ll', tag: word } ];
contractions[ 'WHAT\'LL' ] = [ { value: 'WHAT', tag: word }, { value: '\'LL', tag: word } ];
contractions[ 'What\'ll' ] = [ { value: 'What', tag: word }, { value: '\'ll', tag: word } ];

contractions[ 'what\'re' ] = [ { value: 'what', tag: word }, { value: '\'re', tag: word } ];
contractions[ 'WHAT\'RE' ] = [ { value: 'WHAT', tag: word }, { value: '\'RE', tag: word } ];
contractions[ 'What\'re' ] = [ { value: 'What', tag: word }, { value: '\'re', tag: word } ];

contractions[ 'who\'ve' ] = [ { value: 'who', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'WHO\'VE' ] = [ { value: 'WHO', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'Who\'ve' ] = [ { value: 'Who', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'who\'d' ] = [ { value: 'who', tag: word }, { value: '\'d', tag: word } ];
contractions[ 'WHO\'D' ] = [ { value: 'WHO', tag: word }, { value: '\'D', tag: word } ];
contractions[ 'Who\'d' ] = [ { value: 'Who', tag: word }, { value: '\'d', tag: word } ];

contractions[ 'who\'ll' ] = [ { value: 'who', tag: word }, { value: '\'ll', tag: word } ];
contractions[ 'WHO\'LL' ] = [ { value: 'WHO', tag: word }, { value: '\'LL', tag: word } ];
contractions[ 'Who\'ll' ] = [ { value: 'Who', tag: word }, { value: '\'ll', tag: word } ];

contractions[ 'who\'re' ] = [ { value: 'who', tag: word }, { value: '\'re', tag: word } ];
contractions[ 'WHO\'RE' ] = [ { value: 'WHO', tag: word }, { value: '\'RE', tag: word } ];
contractions[ 'Who\'re' ] = [ { value: 'Who', tag: word }, { value: '\'re', tag: word } ];

contractions[ 'when\'ve' ] = [ { value: 'when', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'WHEN\'VE' ] = [ { value: 'WHEN', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'When\'ve' ] = [ { value: 'When', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'when\'d' ] = [ { value: 'when', tag: word }, { value: '\'d', tag: word } ];
contractions[ 'WHEN\'D' ] = [ { value: 'WHEN', tag: word }, { value: '\'D', tag: word } ];
contractions[ 'When\'d' ] = [ { value: 'When', tag: word }, { value: '\'d', tag: word } ];

contractions[ 'when\'ll' ] = [ { value: 'when', tag: word }, { value: '\'ll', tag: word } ];
contractions[ 'WHEN\'LL' ] = [ { value: 'WHEN', tag: word }, { value: '\'LL', tag: word } ];
contractions[ 'When\'ll' ] = [ { value: 'When', tag: word }, { value: '\'ll', tag: word } ];

contractions[ 'when\'re' ] = [ { value: 'when', tag: word }, { value: '\'re', tag: word } ];
contractions[ 'WHEN\'RE' ] = [ { value: 'WHEN', tag: word }, { value: '\'RE', tag: word } ];
contractions[ 'When\'re' ] = [ { value: 'When', tag: word }, { value: '\'re', tag: word } ];

contractions[ 'where\'ve' ] = [ { value: 'where', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'WHERE\'VE' ] = [ { value: 'WHERE', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'Where\'ve' ] = [ { value: 'Where', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'where\'d' ] = [ { value: 'where', tag: word }, { value: '\'d', tag: word } ];
contractions[ 'WHERE\'D' ] = [ { value: 'WHERE', tag: word }, { value: '\'D', tag: word } ];
contractions[ 'Where\'d' ] = [ { value: 'Where', tag: word }, { value: '\'d', tag: word } ];

contractions[ 'where\'ll' ] = [ { value: 'where', tag: word }, { value: '\'ll', tag: word } ];
contractions[ 'WHERE\'LL' ] = [ { value: 'WHERE', tag: word }, { value: '\'LL', tag: word } ];
contractions[ 'Where\'ll' ] = [ { value: 'Where', tag: word }, { value: '\'ll', tag: word } ];

contractions[ 'where\'re' ] = [ { value: 'where', tag: word }, { value: '\'re', tag: word } ];
contractions[ 'WHERE\'RE' ] = [ { value: 'WHERE', tag: word }, { value: '\'RE', tag: word } ];
contractions[ 'Where\'re' ] = [ { value: 'Where', tag: word }, { value: '\'re', tag: word } ];

contractions[ 'why\'ve' ] = [ { value: 'why', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'WHY\'VE' ] = [ { value: 'WHY', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'Why\'ve' ] = [ { value: 'Why', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'why\'d' ] = [ { value: 'why', tag: word }, { value: '\'d', tag: word } ];
contractions[ 'WHY\'D' ] = [ { value: 'WHY', tag: word }, { value: '\'D', tag: word } ];
contractions[ 'Why\'d' ] = [ { value: 'Why', tag: word }, { value: '\'d', tag: word } ];

contractions[ 'why\'ll' ] = [ { value: 'why', tag: word }, { value: '\'ll', tag: word } ];
contractions[ 'WHY\'LL' ] = [ { value: 'WHY', tag: word }, { value: '\'LL', tag: word } ];
contractions[ 'Why\'ll' ] = [ { value: 'Why', tag: word }, { value: '\'ll', tag: word } ];

contractions[ 'why\'re' ] = [ { value: 'why', tag: word }, { value: '\'re', tag: word } ];
contractions[ 'WHY\'RE' ] = [ { value: 'WHY', tag: word }, { value: '\'RE', tag: word } ];
contractions[ 'Why\'re' ] = [ { value: 'Why', tag: word }, { value: '\'re', tag: word } ];

contractions[ 'how\'ve' ] = [ { value: 'how', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'HOW\'VE' ] = [ { value: 'HOW', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'How\'ve' ] = [ { value: 'How', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'how\'d' ] = [ { value: 'how', tag: word }, { value: '\'d', tag: word } ];
contractions[ 'HOW\'D' ] = [ { value: 'HOW', tag: word }, { value: '\'D', tag: word } ];
contractions[ 'How\'d' ] = [ { value: 'How', tag: word }, { value: '\'d', tag: word } ];

contractions[ 'how\'ll' ] = [ { value: 'how', tag: word }, { value: '\'ll', tag: word } ];
contractions[ 'HOW\'LL' ] = [ { value: 'HOW', tag: word }, { value: '\'LL', tag: word } ];
contractions[ 'How\'ll' ] = [ { value: 'How', tag: word }, { value: '\'ll', tag: word } ];

contractions[ 'how\'re' ] = [ { value: 'how', tag: word }, { value: '\'re', tag: word } ];
contractions[ 'HOW\'RE' ] = [ { value: 'HOW', tag: word }, { value: '\'RE', tag: word } ];
contractions[ 'How\'re' ] = [ { value: 'How', tag: word }, { value: '\'re', tag: word } ];

contractions[ 'there\'ve' ] = [ { value: 'there', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'THERE\'VE' ] = [ { value: 'THERE', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'There\'ve' ] = [ { value: 'There', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'there\'d' ] = [ { value: 'there', tag: word }, { value: '\'d', tag: word } ];
contractions[ 'THERE\'D' ] = [ { value: 'THERE', tag: word }, { value: '\'D', tag: word } ];
contractions[ 'There\'d' ] = [ { value: 'There', tag: word }, { value: '\'d', tag: word } ];

contractions[ 'there\'ll' ] = [ { value: 'there', tag: word }, { value: '\'ll', tag: word } ];
contractions[ 'THERE\'LL' ] = [ { value: 'THERE', tag: word }, { value: '\'LL', tag: word } ];
contractions[ 'There\'ll' ] = [ { value: 'There', tag: word }, { value: '\'ll', tag: word } ];

contractions[ 'there\'re' ] = [ { value: 'there', tag: word }, { value: '\'re', tag: word } ];
contractions[ 'THERE\'RE' ] = [ { value: 'THERE', tag: word }, { value: '\'RE', tag: word } ];
contractions[ 'There\'re' ] = [ { value: 'There', tag: word }, { value: '\'re', tag: word } ];

contractions[ 'that\'ve' ] = [ { value: 'that', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'THAT\'VE' ] = [ { value: 'THAT', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'That\'ve' ] = [ { value: 'That', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'that\'d' ] = [ { value: 'that', tag: word }, { value: '\'d', tag: word } ];
contractions[ 'THAT\'D' ] = [ { value: 'THAT', tag: word }, { value: '\'D', tag: word } ];
contractions[ 'That\'d' ] = [ { value: 'That', tag: word }, { value: '\'d', tag: word } ];

contractions[ 'that\'ll' ] = [ { value: 'that', tag: word }, { value: '\'ll', tag: word } ];
contractions[ 'THAT\'LL' ] = [ { value: 'THAT', tag: word }, { value: '\'LL', tag: word } ];
contractions[ 'That\'ll' ] = [ { value: 'That', tag: word }, { value: '\'ll', tag: word } ];

contractions[ 'that\'re' ] = [ { value: 'that', tag: word }, { value: '\'re', tag: word } ];
contractions[ 'THAT\'RE' ] = [ { value: 'THAT', tag: word }, { value: '\'RE', tag: word } ];
contractions[ 'That\'re' ] = [ { value: 'That', tag: word }, { value: '\'re', tag: word } ];

// Let us!
contractions[ 'let\'s' ] = [ { value: 'let', tag: word }, { value: '\'s', tag: word } ];
contractions[ 'LET\'S' ] = [ { value: 'THAT', tag: word }, { value: '\'S', tag: word } ];
contractions[ 'Let\'s' ] = [ { value: 'Let', tag: word }, { value: '\'s', tag: word } ];

contractions[ 'could\'ve' ] = [ { value: 'could', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'COULD\'VE' ] = [ { value: 'COULD', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'Could\'ve' ] = [ { value: 'Could', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'should\'ve' ] = [ { value: 'should', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'SHOULD\'VE' ] = [ { value: 'SHOULD', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'Should\'ve' ] = [ { value: 'Should', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'would\'ve' ] = [ { value: 'would', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'WOULD\'VE' ] = [ { value: 'WOULD', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'Would\'ve' ] = [ { value: 'Would', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'i\'ll\'ve' ] = [ { value: 'i', tag: word }, { value: '\'ll', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'I\'LL\'VE' ] = [ { value: 'I', tag: word }, { value: '\'LL', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'I\'ll\'ve' ] = [ { value: 'I', tag: word }, { value: '\'ll', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'you\'ll\'ve' ] = [ { value: 'you', tag: word }, { value: '\'ll', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'YOU\'LL\'VE' ] = [ { value: 'YOU', tag: word }, { value: '\'LL', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'You\'ll\'ve' ] = [ { value: 'You', tag: word }, { value: '\'ll', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'they\'ll\'ve' ] = [ { value: 'they', tag: word }, { value: '\'ll', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'THEY\'LL\'VE' ] = [ { value: 'THEY', tag: word }, { value: '\'LL', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'They\'ll\'ve' ] = [ { value: 'They', tag: word }, { value: '\'ll', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'it\'ll\'ve' ] = [ { value: 'it', tag: word }, { value: '\'ll', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'IT\'LL\'VE' ] = [ { value: 'IT', tag: word }, { value: '\'LL', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'It\'ll\'ve' ] = [ { value: 'It', tag: word }, { value: '\'ll', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'he\'ll\'ve' ] = [ { value: 'he', tag: word }, { value: '\'ll', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'HE\'LL\'VE' ] = [ { value: 'HE', tag: word }, { value: '\'LL', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'He\'ll\'ve' ] = [ { value: 'He', tag: word }, { value: '\'ll', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'she\'ll\'ve' ] = [ { value: 'she', tag: word }, { value: '\'ll', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'SHE\'LL\'VE' ] = [ { value: 'SHE', tag: word }, { value: '\'LL', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'She\'ll\'ve' ] = [ { value: 'She', tag: word }, { value: '\'ll', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'shouldn\'t\'ve' ] = [ { value: 'should', tag: word }, { value: 'n\'t', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'SHOULDN\'T\'VE' ] = [ { value: 'SHOULD', tag: word }, { value: 'N\'T', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'Shouldn\'t\'ve' ] = [ { value: 'Should', tag: word }, { value: 'n\'t', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'couldn\'t\'ve' ] = [ { value: 'could', tag: word }, { value: 'n\'t', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'COULDN\'T\'VE' ] = [ { value: 'COULD', tag: word }, { value: 'N\'T', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'Couldn\'t\'ve' ] = [ { value: 'Could', tag: word }, { value: 'n\'t', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'wouldn\'t\'ve' ] = [ { value: 'would', tag: word }, { value: 'n\'t', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'WOULDN\'T\'VE' ] = [ { value: 'WOULD', tag: word }, { value: 'N\'T', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'Wouldn\'t\'ve' ] = [ { value: 'Would', tag: word }, { value: 'n\'t', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'i\'d\'ve' ] = [ { value: 'i', tag: word }, { value: '\'d', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'I\'D\'VE' ] = [ { value: 'I', tag: word }, { value: '\'D', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'I\'d\'ve' ] = [ { value: 'I', tag: word }, { value: '\'d', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'you\'d\'ve' ] = [ { value: 'you', tag: word }, { value: '\'d', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'YOU\'D\'VE' ] = [ { value: 'YOU', tag: word }, { value: '\'D', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'You\'d\'ve' ] = [ { value: 'You', tag: word }, { value: '\'d', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'he\'d\'ve' ] = [ { value: 'he', tag: word }, { value: '\'d', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'HE\'D\'VE' ] = [ { value: 'HE', tag: word }, { value: '\'D', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'He\'d\'ve' ] = [ { value: 'He', tag: word }, { value: '\'d', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'she\'d\'ve' ] = [ { value: 'she', tag: word }, { value: '\'d', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'SHE\'D\'VE' ] = [ { value: 'SHE', tag: word }, { value: '\'D', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'She\'d\'ve' ] = [ { value: 'She', tag: word }, { value: '\'d', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'you\'d\'ve' ] = [ { value: 'you', tag: word }, { value: '\'d', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'YOU\'D\'VE' ] = [ { value: 'YOU', tag: word }, { value: '\'D', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'You\'d\'ve' ] = [ { value: 'You', tag: word }, { value: '\'d', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'they\'d\'ve' ] = [ { value: 'they', tag: word }, { value: '\'d', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'THEY\'D\'VE' ] = [ { value: 'THEY', tag: word }, { value: '\'D', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'They\'d\'ve' ] = [ { value: 'They', tag: word }, { value: '\'d', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'there\'d\'ve' ] = [ { value: 'there', tag: word }, { value: '\'d', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'THERE\'D\'VE' ] = [ { value: 'THERE', tag: word }, { value: '\'D', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'There\'d\'ve' ] = [ { value: 'There', tag: word }, { value: '\'d', tag: word }, { value: '\'ve', tag: word } ];

contractions[ 'it\'d\'ve' ] = [ { value: 'it', tag: word }, { value: '\'d', tag: word }, { value: '\'ve', tag: word } ];
contractions[ 'IT\'D\'VE' ] = [ { value: 'IT', tag: word }, { value: '\'D', tag: word }, { value: '\'VE', tag: word } ];
contractions[ 'It\'d\'ve' ] = [ { value: 'It', tag: word }, { value: '\'d', tag: word }, { value: '\'ve', tag: word } ];

module.exports = contractions;

},{}],"../../../node_modules/wink-tokenizer/src/wink-tokenizer.js":[function(require,module,exports) {
//     wink-tokenizer
//     Multilingual tokenizer that automatically tags each token with its type.
//
//     Copyright (C) 2017-20  GRAYPE Systems Private Limited
//
//     This file is part of “wink-tokenizer”.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
var emojiRegex = require( 'emoji-regex' );
var contractions = require( './eng-contractions.js' );
var rgxSpaces = /\s+/g;
// Ordinals only for Latin like 1st, 2nd or 12th or 33rd.
var rgxOrdinalL1 = /1\dth|[04-9]th|1st|2nd|3rd|[02-9]1st|[02-9]2nd|[02-9]3rd|[02-9][04-9]th|\d+\d[04-9]th|\d+\d1st|\d+\d2nd|\d+\d3rd/g;
// Apart from detecting pure integers or decimals, also detect numbers containing
// `. - / ,` so that dates, ip address, fractions and things like codes or part
// numbers are also detected as numbers only. These regex will therefore detected
// 8.8.8.8 or 12-12-1924 or 1,1,1,1.00 or 1/4 or 1/4/66/777 as numbers.
// Latin-1 Numbers.
var rgxNumberL1 = /\d+\/\d+|\d(?:[\.,-\/]?\d)*(?:\.\d+)?/g;
// Devanagari Numbers.
var rgxNumberDV = /[\u0966-\u096F]+\/[\u0966-\u096F]+|[\u0966-\u096F](?:[\.,-\/]?[\u0966-\u096F])*(?:\.[\u0966-\u096F]+)?/g;
var rgxMention = /@\w+/g;
// Latin-1 Hashtags.
var rgxHashtagL1 = /#[a-z][a-z0-9]*/gi;
// Devanagari Hashtags; include Latin-1 as well.
var rgxHashtagDV = /#[\u0900-\u0963\u0970-\u097F][\u0900-\u0963\u0970-\u097F\u0966-\u096F0-9]*/gi;
// EMail is EN character set.
var rgxEmail = /[-!#$%&'*+\/=?^\w{|}~](?:\.?[-!#$%&'*+\/=?^\w`{|}~])*@[a-z0-9](?:-?\.?[a-z0-9])*(?:\.[a-z](?:-?[a-z0-9])*)+/gi;
// Bitcoin, Ruble, Indian Rupee, Other Rupee, Dollar, Pound, Yen, Euro, Wong.
var rgxCurrency = /[₿₽₹₨$£¥€₩]/g;
// These include both the punctuations: Latin-1 & Devanagari.
var rgxPunctuation = /[’'‘’`“”"\[\]\(\){}…,\.!;\?\-:\u0964\u0965]/g;
var rgxQuotedPhrase = /"[^"]*"/g;
// NOTE: URL will support only EN character set for now.
var rgxURL = /(?:https?:\/\/)(?:[\da-z\.-]+)\.(?:[a-z\.]{2,6})(?:[\/\w\.\-\?#=]*)*\/?/gi;
var rgxEmoji = emojiRegex();
var rgxEmoticon = /:-?[dps\*\/\[\]{}\(\)]|;-?[/(/)d]|<3/gi;
var rgxTime = /(?:\d|[01]\d|2[0-3]):?(?:[0-5][0-9])?\s?(?:[ap]\.?m\.?|hours|hrs)/gi;
// Inlcude [Latin-1 Supplement Unicode Block](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block))
var rgxWordL1 = /[a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF][a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF']*/gi;
// Define [Devanagari Unicode Block](https://unicode.org/charts/PDF/U0900.pdf)
var rgxWordDV = /[\u0900-\u094F\u0951-\u0963\u0970-\u097F]+/gi;
// Symbols go here; including Om.
var rgxSymbol = /[\u0950~@#%\^\+=\*\|\/<>&]/g;
// For detecting if the word is a potential contraction.
var rgxContraction = /'/;
// Singular & Plural possessive
var rgxPosSingular = /([a-z]+)('s)$/i;
var rgxPosPlural = /([a-z]+s)(')$/i;
// Regexes and their categories; used for tokenizing via match/split. The
// sequence is *critical* for correct tokenization.
var rgxsMaster = [
  { regex: rgxQuotedPhrase, category: 'quoted_phrase' },
  { regex: rgxURL, category: 'url' },
  { regex: rgxEmail, category: 'email' },
  { regex: rgxMention, category: 'mention' },
  { regex: rgxHashtagL1, category: 'hashtag' },
  { regex: rgxHashtagDV, category: 'hashtag' },
  { regex: rgxEmoji, category: 'emoji' },
  { regex: rgxEmoticon, category: 'emoticon' },
  { regex: rgxTime, category: 'time' },
  { regex: rgxOrdinalL1, category: 'ordinal' },
  { regex: rgxNumberL1, category: 'number' },
  { regex: rgxNumberDV, category: 'number' },
  { regex: rgxCurrency, category: 'currency' },
  { regex: rgxWordL1, category: 'word' },
  { regex: rgxWordDV, category: 'word' },
  { regex: rgxPunctuation, category: 'punctuation' },
  { regex: rgxSymbol, category: 'symbol' }
];

// Used to generate finger print from the tokens.
// NOTE: this variable is being reset in `defineConfig()`.
var fingerPrintCodes = {
  emoticon: 'c',
  email: 'e',
  emoji: 'j',
  hashtag: 'h',
  mention: 'm',
  number: 'n',
  ordinal: 'o',
  quoted_phrase: 'q', // eslint-disable-line camelcase
  currency: 'r',
  // symbol: 's',
  time: 't',
  url: 'u',
  word: 'w',
  alien: 'z'
};

// ### tokenizer
/**
 *
 * Creates an instance of {@link Tokenizer}.
 *
 * @return {Tokenizer} object conatining set of API methods for tokenizing a sentence
 * and defining configuration, plugin etc.
 * @example
 * // Load wink tokenizer.
 * var tokenizer = require( 'wink-tokenizer' );
 * // Create your instance of wink tokenizer.
 * var myTokenizer = tokenizer();
*/
var tokenizer = function () {
  // Default configuration: most comprehensive tokenization. Make deep copy!
  var rgxs = rgxsMaster.slice( 0 );
  // The result of last call to `tokenize()` is retained here.
  var finalTokens = [];
  // Returned!

  /**
   * @classdesc Tokenizer class
   * @class Tokenizer
   * @hideconstructor
   */
  var methods = Object.create( null );

  // ### manageContraction
  /**
   *
   * Splits a contractions into words by first trying a lookup in strandard
   * `contractions`; if the lookup fails, it checks for possessive in `'s` or
   * `s'` forms and separates the possesive part from the word. Otherwise the
   * contraction is treated as a normal word and no splitting occurs.
   *
   * @param {string} word that could be a potential conraction.
   * @param {object[]} tokens where the outcome is pushed.
   * @return {object[]} updated tokens according to the `word.`
   * @private
  */
  var manageContraction = function ( word, tokens ) {
    var ct = contractions[ word ];
    var matches;
    if ( ct === undefined ) {
      // Try possesive of sigular & plural forms
      matches = word.match( rgxPosSingular );
      if ( matches ) {
        tokens.push( { value: matches[ 1 ], tag: 'word' } );
        tokens.push( { value: matches[ 2 ], tag: 'word' } );
      } else {
        matches = word.match( rgxPosPlural );
        if ( matches ) {
          tokens.push( { value: matches[ 1 ], tag: 'word' } );
          tokens.push( { value: matches[ 2 ], tag: 'word' } );
        } else tokens.push( { value: word, tag: 'word' } );
      }
    } else {
      // Manage via lookup; ensure cloning!
      tokens.push( Object.assign( {}, ct[ 0 ] ) );
      tokens.push( Object.assign( {}, ct[ 1 ] ) );
      if ( ct[ 2 ] ) tokens.push( Object.assign( {}, ct[ 2 ] ) );
    }
    return tokens;
  }; // manageContraction()

  // ### tokenizeTextUnit
  /**
   *
   * Attempts to tokenize the input `text` using the `rgxSplit`. The tokenization
   * is carried out by combining the regex matches and splits in the right sequence.
   * The matches are the *real tokens*, whereas splits are text units that are
   * tokenized in later rounds! The real tokens (i.e. matches) are pushed as
   * `object` and splits as `string`.
   *
   * @param {string} text unit that is to be tokenized.
   * @param {object} rgxSplit object containing the regex and it's category.
   * @return {array} of tokens.
   * @private
  */
  var tokenizeTextUnit = function ( text, rgxSplit ) {
    // Regex matches go here; note each match is a token and has the same tag
    // as of regex's category.
    var matches = text.match( rgxSplit.regex );
    // Balance is "what needs to be tokenized".
    var balance = text.split( rgxSplit.regex );
    // The result, in form of combination of tokens & matches, is captured here.
    var tokens = [];
    // The tag;
    var tag = rgxSplit.category;
    // Helper variables.
    var aword,
        i,
        imax,
        k = 0,
        t;

    // Combine tokens & matches in the following pattern [ b0 m0 b1 m1 ... ]
    matches = ( matches ) ? matches : [];
    for ( i = 0, imax = balance.length; i < imax; i += 1 ) {
      t = balance[ i ];
      t = t.trim();
      if ( t ) tokens.push( t );
      if ( k < matches.length ) {
        if ( tag === 'word' ) {
          // Tag type `word` token may have a contraction.
          aword = matches[ k ];
          if ( rgxContraction.test( aword ) ) {
            tokens = manageContraction( aword, tokens );
          } else {
            // Means there is no contraction.
            tokens.push( { value: aword, tag: tag } );
          }
        } else tokens.push( { value: matches[ k ], tag: tag } );
      }
      k += 1;
    }

    return ( tokens );
  }; // tokenizeTextUnit()

  // ### tokenizeTextRecursively
  /**
   *
   * Tokenizes the input text recursively using the array of `regexes` and then
   * the `tokenizeTextUnit()` function. If (or whenever) the `regexes` becomes
   * empty, it simply splits the text on non-word characters instead of using
   * the `tokenizeTextUnit()` function.
   *
   * @param {string} text unit that is to be tokenized.
   * @param {object} regexes object containing the regex and it's category.
   * @return {undefined} nothing!
   * @private
  */
  var tokenizeTextRecursively = function ( text, regexes ) {
    var sentence = text.trim();
    var tokens = [];
    var i, imax;

    if ( !regexes.length ) {
      // No regex left, split on `spaces` and tag every token as **alien**.
      text.split( rgxSpaces ).forEach( function ( tkn ) {
        finalTokens.push( { value: tkn.trim(), tag: 'alien' } );
      } );
      return;
    }

    var rgx = regexes[ 0 ];
    tokens = tokenizeTextUnit( sentence, rgx );

    for ( i = 0, imax = tokens.length; i < imax; i += 1 ) {
      if ( typeof tokens[ i ] === 'string' ) {
        // Strings become candidates for further tokenization.
        tokenizeTextRecursively( tokens[ i ], regexes.slice( 1 ) );
      } else {
        finalTokens.push( tokens[ i ] );
      }
    }
  }; // tokenizeTextRecursively()

  // ### defineConfig
  /**
   *
   * Defines the configuration in terms of the types of token that will be
   * extracted by [`tokenize()`](#tokenize) method. Note by default, all types
   * of tokens will be detected and tagged automatically.
   *
   * @method Tokenizer#defineConfig
   * @param {object} config It defines 0 or more properties from the list of
   * **14** properties. A true value for a property ensures tokenization
   * for that type of text; whereas false value will mean that the tokenization of that
   * type of text will not be attempted. It also **resets** the effect of any previous
   * call(s) to the [`addRegex()`](#addregex) API.
   *
   * *An empty config object is equivalent to splitting on spaces. Whatever tokens
   * are created like this are tagged as **alien** and **`z`** is the
   * [finger print](#gettokensfp) code of this token type.*
   *
   * The table below gives the name of each property and it's description including
   * examples. The character with in paranthesis is the [finger print](#gettokensfp) code for the
   * token of that type.
   * @param {boolean} [config.currency=true] such as **$** or **£** symbols (**`r`**)
   * @param {boolean} [config.email=true] for example **john@acme.com** or **superman1@gmail.com** (**`e`**)
   * @param {boolean} [config.emoji=true] any standard unicode emojis e.g. 😊 or 😂 or 🎉 (**`j`**)
   * @param {boolean} [config.emoticon=true] common emoticons such as **`:-)`** or **`:D`** (**`c`**)
   * @param {boolean} [config.hashtag=true] hash tags such as **`#happy`** or **`#followme`** (**`h`**)
   * @param {boolean} [config.number=true] any integer, decimal number, fractions such as **19**, **2.718**
   * or **1/4** and numerals containing "**`, - / .`**", for example 12-12-1924 (**`n`**)
   * @param {boolean} [config.ordinal=true] ordinals like **1st**, **2nd**, **3rd**, **4th** or **12th** or **91st** (**`o`**)
   * @param {boolean} [config.punctuation=true] common punctuation such as **`?`** or **`,`**
   * ( token becomes fingerprint )
   * @param {boolean} [config.quoted_phrase=false] any **"quoted text"** in the sentence. _Note: its default value is **false**._ (**`q`**)
   * @param {boolean} [config.symbol=true] for example **`~`** or **`+`** or **`&`** or **`%`** or **`/`** ( token becomes fingerprint )
   * @param {boolean} [config.time=true] common representation of time such as **4pm** or **16:00 hours** (**`t`**)
   * @param {boolean} [config.mention=true] **@mention**  as in github or twitter (**`m`**)
   * @param {boolean} [config.url=true] URL such as **https://github.com** (**`u`**)
   * @param {boolean} [config.word=true] word such as **faster** or **résumé** or **prévenir** (**`w`**)
   * @return {number} number of properties set to true from the list of above 13.
   * @example
   * // Do not tokenize & tag @mentions.
   * var myTokenizer.defineConfig( { mention: false } );
   * // -> 13
   * // Only tokenize words as defined above.
   * var myTokenizer.defineConfig( {} );
   * // -> 0
  */
  var defineConfig = function ( config ) {
    if ( typeof config === 'object' && Object.keys( config ).length ) {
      rgxs = rgxsMaster.filter( function ( rgx ) {
        // Config for the Category of `rgx`.
        var cc = config[ rgx.category ];
        // Means `undefined` & `null` values are taken as true; otherwise
        // standard **truthy** and **falsy** interpretation applies!!
        return ( cc === undefined || cc === null || !!cc );
      } );
    } else rgxs = [];
    // Count normalized length i.e. ignore multi-script entries.
    const uniqueCats = Object.create( null );
    rgxs.forEach( function ( rgx ) {
      uniqueCats[ rgx.category ] = true;
    } );
    // Reset the `fingerPrintCodes` variable.
    fingerPrintCodes = {
      emoticon: 'c',
      email: 'e',
      emoji: 'j',
      hashtag: 'h',
      mention: 'm',
      number: 'n',
      ordinal: 'o',
      quoted_phrase: 'q', // eslint-disable-line camelcase
      currency: 'r',
      // symbol: 's',
      time: 't',
      url: 'u',
      word: 'w',
      alien: 'z'
    };
    return ( ( Object.keys( uniqueCats ) ).length );
  }; // defineConfig()

  // ### tokenize
  /**
   *
   * Tokenizes the input `sentence` using the configuration specified via
   * [`defineConfig()`](#defineconfig).
   * Common contractions and possessive nouns are split into 2 separate tokens;
   * for example **I'll** splits as `'I'` and `'\'ll'` or **won't** splits as
   * `'wo'` and `'n\'t'`.
   *
   * @method Tokenizer#tokenize
   * @param {string} sentence the input sentence.
   * @return {object[]} of tokens; each one of them is an object with 2-keys viz.
   * `value` and its `tag` identifying the type of the token.
   * @example
   * var s = 'For detailed API docs, check out http://winkjs.org/wink-regression-tree/ URL!';
   * myTokenizer.tokenize( s );
   * // -> [ { value: 'For', tag: 'word' },
   * //      { value: 'detailed', tag: 'word' },
   * //      { value: 'API', tag: 'word' },
   * //      { value: 'docs', tag: 'word' },
   * //      { value: ',', tag: 'punctuation' },
   * //      { value: 'check', tag: 'word' },
   * //      { value: 'out', tag: 'word' },
   * //      { value: 'http://winkjs.org/wink-regression-tree/', tag: 'url' },
   * //      { value: 'URL', tag: 'word' },
   * //      { value: '!', tag: 'punctuation' } ]
  */
  var tokenize = function ( sentence ) {
    finalTokens = [];
    tokenizeTextRecursively( sentence, rgxs );
    return finalTokens;
  }; // tokenize()

  // ### getTokensFP
  /**
   *
   * Returns the finger print of the tokens generated by the last call to
   * [`tokenize()`](#tokenize). A finger print is a string created by sequentially
   * joining the unique code of each token's type. Refer to table given under
   * [`defineConfig()`](#defineconfig) for values of these codes.
   *
   * A finger print is extremely useful in spotting patterns present in the sentence
   * using `regexes`, which is otherwise a complex and time consuming task.
   *
   * @method Tokenizer#getTokensFP
   * @return {string} finger print of tokens generated by the last call to `tokenize()`.
   * @example
   * // Generate finger print of sentence given in the previous example
   * // under tokenize().
   * myTokenizer.getTokensFP();
   * // -> 'wwww,wwuw!'
  */
  var getTokensFP = function () {
    var fp = [];
    finalTokens.forEach( function ( t ) {
      fp.push( ( fingerPrintCodes[ t.tag ] ) ? fingerPrintCodes[ t.tag ] : t.value );
    } );
    return fp.join( '' );
  }; // getFingerprint()

  // ### addTag
  var addTag = function (name, fingerprintCode) {
    if (fingerPrintCodes[name]) {
      throw new Error( 'Tag ' + name + ' already exists' );
    }

    fingerPrintCodes[name] = fingerprintCode;
  }; // addTag()

  // ### addRegex
  /**
   * Adds a regex for parsing a new type of token. This regex can either be mapped
   * to an existing tag or it allows creation of a new tag along with its finger print.
   * The uniqueness of the [finger prints](#defineconfig) have to ensured by the user.
   *
   * *The added regex(s) will supersede the internal parsing.*
   *
   * @method Tokenizer#addRegex
   * @param {RegExp} regex the new regular expression.
   * @param {string} tag tokens matching the `regex` will be assigned this tag.
   * @param {string} [fingerprintCode=undefined] required if adding a new
   * tag; ignored if using an existing tag.
   * @return {void} nothing!
   * @example
   * // Adding a regex for an existing tag
   * myTokenizer.addRegex( /\(oo\)/gi, 'emoticon' );
   * myTokenizer.tokenize( '(oo) Hi!' )
   * // -> [ { value: '(oo)', tag: 'emoticon' },
   * //      { value: 'Hi', tag: 'word' },
   * //      { value: '!', tag: 'punctuation' } ]
   *
   * // Adding a regex to parse a new token type
   * myTokenizer.addRegex( /hello/gi, 'greeting', 'g' );
   * myTokenizer.tokenize( 'hello, how are you?' );
   * // -> [ { value: 'hello', tag: 'greeting' },
   * //      { value: ',', tag: 'punctuation' },
   * //      { value: 'how', tag: 'word' },
   * //      { value: 'are', tag: 'word' },
   * //      { value: 'you', tag: 'word' },
   * //      { value: '?', tag: 'punctuation' } ]
   * // Notice how "hello" is now tagged as "greeting" and not as "word".
   *
   * // Using definConfig will reset the above!
   * myTokenizer.defineConfig( { word: true } );
   * myTokenizer.tokenize( 'hello, how are you?' );
   * // -> [ { value: 'hello', tag: 'word' },
   * //      { value: ',', tag: 'punctuation' },
   * //      { value: 'how', tag: 'word' },
   * //      { value: 'are', tag: 'word' },
   * //      { value: 'you', tag: 'word' },
   * //      { value: '?', tag: 'punctuation' } ]
  */

  var addRegex = function (regex, tag, fingerprintCode) {
    if (!fingerPrintCodes[tag] && !fingerprintCode) {
      throw new Error( 'Tag ' + tag + ' doesn\'t exist; Provide a \'fingerprintCode\' to add it as a tag.' );
    } else if (!fingerPrintCodes[tag]) {
      addTag(tag, fingerprintCode);
    }

    rgxs.unshift( { regex: regex, category: tag } );
  }; // addRegex()

  // Set quoted_phrase as false becuase mostly it is not required.
  defineConfig( { quoted_phrase: false } ); // eslint-disable-line camelcase
  methods.defineConfig = defineConfig;
  methods.tokenize = tokenize;
  methods.getTokensFP = getTokensFP;
  methods.addTag = addTag;
  methods.addRegex = addRegex;
  return methods;
};

module.exports = tokenizer;

},{"emoji-regex":"../../../node_modules/wink-tokenizer/node_modules/emoji-regex/index.js","./eng-contractions.js":"../../../node_modules/wink-tokenizer/src/eng-contractions.js"}],"../../../node_modules/wink-nlp-utils/src/string-tokenize.js":[function(require,module,exports) {
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of “wink-nlp-utils”.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
var winkTokenize = require( 'wink-tokenizer' )().tokenize;

// ## string

// ### tokenize
/**
 *
 * Tokenizes the input `sentence` according to the value of `detailed` flag.
 * Any occurance of `...` in the `sentence` is
 * converted to ellipses. In `detailed = true` mode, it
 * tags every token with its type; the supported tags are currency, email,
 * emoji, emoticon, hashtag, number, ordinal, punctuation, quoted_phrase, symbol,
 * time, mention, url, and word.
 *
 * @alias string#tokenize
 * @param {string} sentence the input string.
 * @param {boolean} [detailed=false] if true, each token is a object cotaining
 * `value` and `tag` of each token; otherwise each token is a string. It's default
 * value of **false** ensures compatibility with previous version.
 * @return {(string[]|object[])} an array of strings if `detailed` is false otherwise
 * an array of objects.
 * @example
 * tokenize( "someone's wallet, isn't it? I'll return!" );
 * // -> [ 'someone', '\'s', 'wallet', ',', 'is', 'n\'t', 'it', '?',
 * //      'I', '\'ll', 'return', '!' ]
 *
 * tokenize( 'For details on wink, check out http://winkjs.org/ URL!', true );
 * // -> [ { value: 'For', tag: 'word' },
 * //      { value: 'details', tag: 'word' },
 * //      { value: 'on', tag: 'word' },
 * //      { value: 'wink', tag: 'word' },
 * //      { value: ',', tag: 'punctuation' },
 * //      { value: 'check', tag: 'word' },
 * //      { value: 'out', tag: 'word' },
 * //      { value: 'http://winkjs.org/', tag: 'url' },
 * //      { value: 'URL', tag: 'word' },
 * //      { value: '!', tag: 'punctuation' } ]
 */
var tokenize = function ( sentence, detailed ) {
  var tokens = winkTokenize( sentence.replace( '...', '…' ) );
  var i;
  if ( !detailed ) {
    for ( i = 0; i < tokens.length; i += 1 ) tokens[ i ] = tokens[ i ].value;
  }

  return tokens;
}; // tokenize()

module.exports = tokenize;

},{"wink-tokenizer":"../../../node_modules/wink-tokenizer/src/wink-tokenizer.js"}],"../../../node_modules/wink-nlp-utils/src/phonetize_regexes.js":[function(require,module,exports) {
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of “wink-nlp-utils”.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
/* eslint no-underscore-dangle: "off" */
var rgx = Object.create( null );
// Remove repeating characters.
rgx.repeatingChars = /([^c])\1/g;
// Drop first character from character pairs, if found in the beginning.
rgx.kngnPairs = /^(kn|gn|pn|ae|wr)/;
// Drop vowels that are not found in the beginning.
rgx.__vowels = /(?!^)[aeiou]/g;
// Replaces `ough` in the end by 'f'
rgx.ough = /ough$/;
// Replace following 3 instances of `dg` by `j`.
rgx.dge = /dge/g;
rgx.dgi = /dgi/g;
rgx.dgy = /dgy/g;
// Replace `sch` by `sk`.
rgx.sch = /sch/g;
// Drop `c` in `sci, sce, scy`.
rgx.sci = /sci/g;
rgx.sce = /sce/g;
rgx.scy = /scy/g;
// Make 'sh' out of `tio & tia`.
rgx.tio = /tio/g;
rgx.tia = /tia/g;
// `t` is silent in `tch`.
rgx.tch = /tch/g;
// Drop `b` in the end if preceeded by `m`.
rgx.mb_ = /mb$/;
// These are pronounced as `k`.
rgx.cq = /cq/g;
rgx.ck = /ck/g;
// Here `c` sounds like `s`
rgx.ce = /ce/g;
rgx.ci = /ci/g;
rgx.cy = /cy/g;
// And this `f`.
rgx.ph = /ph/g;
// The `sh` finally replaced by `x`.
rgx.sh = /sh|sio|sia/g;
// This is open rgx - TODO: need to finalize.
rgx.vrnotvy = /([aeiou])(r)([^aeiouy])/g;
// `th` sounds like theta - make it 0.
rgx.th = /th/g;
// `c` sounds like `k` except when it is followed by `h`.
rgx.cnoth = /(c)([^h])/g;
// Even `q` sounds like `k`.
rgx.q = /q/g;
// The first `x` sounds like `s`.
rgx._x = /^x/;
// Otherwise `x` is more like `ks`.
rgx.x = /x/g;
// Drop `y` if not followed by a vowel or appears in the end.
rgx.ynotv = /(y)([^aeiou])/g;
rgx.y_ = /y$/;
// `z` is `s`.
rgx.z = /z/g;

// Export rgx.
module.exports = rgx;

},{}],"../../../node_modules/wink-nlp-utils/src/string-phonetize.js":[function(require,module,exports) {
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of “wink-nlp-utils”.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
var phnrgx = require( './phonetize_regexes.js' );
/* eslint no-underscore-dangle: "off" */

// ## string

// ### phonetize
/**
 *
 * Phonetizes the input string using an algorithmic adaptation of Metaphone; It
 * is not an exact implementation of Metaphone.
 *
 * @alias string#phonetize
 * @param {string} word the input word.
 * @return {string} phonetic code of `word`.
 * @example
 * phonetize( 'perspective' );
 * // -> 'prspktv'
 * phonetize( 'phenomenon' );
 * // -> 'fnmnn'
 */
var phonetize = function ( word ) {
  var p = word.toLowerCase();
  // Remove repeating letters.
  p = p.replace( phnrgx.repeatingChars, '$1');
  // Drop first character of `kgknPairs`.
  if ( phnrgx.kngnPairs.test( p ) ) {
    p = p.substr( 1, p.length - 1 );
  }
  // Run Regex Express now!
  p = p
      // Change `ough` in the end as `f`,
      .replace( phnrgx.ough, 'f' )
      // Change `dg` to `j`, in `dge, dgi, dgy`.
      .replace( phnrgx.dge, 'je' )
      .replace( phnrgx.dgi, 'ji' )
      .replace( phnrgx.dgy, 'jy' )
      // Change `c` to `k` in `sch`
      .replace( phnrgx.sch, 'sk' )
      // Drop `c` in `sci, sce, scy`.
      .replace( phnrgx.sci, 'si' )
      .replace( phnrgx.sce, 'se' )
      .replace( phnrgx.scy, 'sy' )
      // Drop `t` if it appears as `tch`.
      .replace( phnrgx.tch, 'ch' )
      // Replace `tio & tia` by `sh`.
      .replace( phnrgx.tio, 'sh' )
      .replace( phnrgx.tia, 'sh' )
      // Drop `b` if it appears as `mb` in the end.
      .replace( phnrgx.mb_, 'm' )
      // Drop `r` if it preceeds a vowel and not followed by a vowel or `y`
      // .replace( rgx.vrnotvy, '$1$3' )
      // Replace `c` by `s` in `ce, ci, cy`.
      .replace( phnrgx.ce, 'se' )
      .replace( phnrgx.ci, 'si' )
      .replace( phnrgx.cy, 'sy' )
      // Replace `cq` by `q`.
      .replace( phnrgx.cq, 'q' )
      // Replace `ck` by `k`.
      .replace( phnrgx.ck, 'k' )
      // Replace `ph` by `f`.
      .replace( phnrgx.ph, 'f' )
      // Replace `th` by `0` (theta look alike!).
      .replace( phnrgx.th, '0' )
      // Replace `c` by `k` if it is not followed by `h`.
      .replace( phnrgx.cnoth, 'k$2' )
      // Replace `q` by `k`.
      .replace( phnrgx.q, 'k' )
      // Replace `x` by `s` if it appears in the beginning.
      .replace( phnrgx._x, 's' )
      // Other wise replace `x` by `ks`.
      .replace( phnrgx.x, 'ks' )
      // Replace `sh, sia, sio` by `x`. Needs to be done post `x` processing!
      .replace( phnrgx.sh, 'x' )
      // Drop `y` if it is now followed by a **vowel**.
      .replace( phnrgx.ynotv, '$2' )
      .replace( phnrgx.y_, '' )
      // Replace `z` by `s`.
      .replace( phnrgx.z, 's' )
      // Drop all **vowels** excluding the first one.
      .replace( phnrgx.__vowels, '' );

      return ( p );
}; // phonetize()

module.exports = phonetize;

},{"./phonetize_regexes.js":"../../../node_modules/wink-nlp-utils/src/phonetize_regexes.js"}],"../../../node_modules/wink-distance/src/soundex.js":[function(require,module,exports) {
//     wink-distance
//     Distance functions for Bag of Words, Strings,
//     Vectors and more.
//
//     Copyright (C) 2017-18  GRAYPE Systems Private Limited
//
//     This file is part of “wink-distance”.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
// Soundex Code for alphabets.
/* eslint-disable object-property-newline */
var soundexMap = {
  A: 0, E: 0, I: 0, O: 0, U: 0, Y: 0,
  B: 1, F: 1, P: 1, V: 1,
  C: 2, G: 2, J: 2, K: 2, Q: 2, S: 2, X: 2, Z: 2,
  D: 3, T: 3,
  L: 4,
  M: 5, N: 5,
  R: 6
};

// ## string

// ### soundex
/**
 *
 * Produces the soundex code from the input `word`.
 *
 * @private
 * @param {string} word the input word.
 * @param {number} [maxLength=4] of soundex code to be returned.
 * @return {string} soundex code of `word`.
 * @example
 * soundex( 'Burroughs' );
 * // -> 'B620'
 * soundex( 'Burrows' );
 * // -> 'B620'
 */
var soundex = function ( word, maxLength ) {
  // Upper case right in the begining.
  var s = ( word.length ) ? word.toUpperCase() : '?';
  var i,
      imax = s.length;
  // Soundex code builds here.
  var sound = [];
  // Helpers - `ch` is a char from `s` and `code/prevCode` are sondex codes
  // for consonants.
  var ch, code,
      prevCode = 9;
  // Use default of 4.
  var maxLen = maxLength || 4;
  // Iterate through every character.
  for ( i = 0; i < imax; i += 1 ) {
    ch = s[ i ];
    code = soundexMap[ ch ];
    if ( i ) {
      // Means i is > 0.
      // `code` is either (a) `undefined` if an unknown character is
      // encountered including `h & w`, or (b) `0` if it is vowel, or
      // (c) the soundex code for a consonant.
      if ( code && code !== prevCode ) {
        // Consonant and not adjecant duplicates!
        sound.push( code );
      } else if ( code !== 0 ) {
        // Means `h or w` or an unknown character: ensure `prevCode` is
        // remembered so that adjecant duplicates can be handled!
        code = prevCode;
      }
    } else {
      // Retain the first letter
      sound.push( ch );
    }
    prevCode = code;
  }
  s = sound.join( '' );
  // Always ensure minimum length of 4 characters for maxLength > 4.
  if ( s.length < 4 ) s += '000';
  // Return the required length.
  return s.substr( 0, maxLen );
}; // soundex()

module.exports = soundex;

},{}],"../../../node_modules/wink-nlp-utils/src/string-soundex.js":[function(require,module,exports) {
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of “wink-nlp-utils”.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
var sndx = require( 'wink-distance/src/soundex.js' );

// ## string

// ### soundex
/**
 *
 * Produces the soundex code from the input `word`.
 *
 * @alias string#soundex
 * @param {string} word the input word.
 * @param {number} [maxLength=4] of soundex code to be returned.
 * @return {string} soundex code of `word`.
 * @example
 * soundex( 'Burroughs' );
 * // -> 'B620'
 * soundex( 'Burrows' );
 * // -> 'B620'
 */
var soundex = function ( word, maxLength ) {
  return sndx( word, maxLength );
}; // soundex()

module.exports = soundex;

},{"wink-distance/src/soundex.js":"../../../node_modules/wink-distance/src/soundex.js"}],"../../../node_modules/wink-nlp-utils/src/tokens-stem.js":[function(require,module,exports) {
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of “wink-nlp-utils”.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
var porter2Stemmer = require( 'wink-porter2-stemmer' );

// ## tokens

// ### stem
/**
 *
 * Stems input tokens using Porter Stemming Algorithm Version 2.
 *
 * @alias tokens#stem
 * @param {string[]} tokens the input tokens.
 * @return {string[]} stemmed tokens.
 * @example
 * stem( [ 'he', 'acted', 'decisively', 'today' ] );
 * // -> [ 'he', 'act', 'decis', 'today' ]
 */
var stem = function ( tokens ) {
  return tokens.map( porter2Stemmer );
}; // stem()

module.exports = stem;

},{"wink-porter2-stemmer":"../../../node_modules/wink-porter2-stemmer/src/wink-porter2-stemmer.js"}],"../../../node_modules/wink-nlp-utils/src/tokens-phonetize.js":[function(require,module,exports) {
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of “wink-nlp-utils”.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
var stringPhonetize = require( './string-phonetize.js' );

// ## tokens

// ### phonetize
/**
 *
 * Phonetizes input tokens using using an algorithmic adaptation of Metaphone.
 *
 * @alias tokens#phonetize
 * @param {string[]} tokens the input tokens.
 * @return {string[]} phonetized tokens.
 * @example
 * phonetize( [ 'he', 'acted', 'decisively', 'today' ] );
 * // -> [ 'h', 'aktd', 'dssvl', 'td' ]
 */
var phonetize = function ( tokens ) {
  return tokens.map( stringPhonetize );
}; // phonetize()

module.exports = phonetize;

},{"./string-phonetize.js":"../../../node_modules/wink-nlp-utils/src/string-phonetize.js"}],"../../../node_modules/wink-nlp-utils/src/tokens-soundex.js":[function(require,module,exports) {
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of “wink-nlp-utils”.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
var stringSoundex = require( './string-soundex.js' );

// ## tokens

// ### soundex
/**
 *
 * Generates the soundex coded tokens from the input tokens.
 *
 * @alias tokens#soundex
 * @param {string[]} tokens the input tokens.
 * @return {string[]} soundex coded tokens.
 * @example
 * soundex( [ 'he', 'acted', 'decisively', 'today' ] );
 * // -> [ 'H000', 'A233', 'D221', 'T300' ]
 */
var soundex = function ( tokens ) {
  // Need to send `maxLength` as `undefined`.
  return tokens.map( ( t ) => stringSoundex( t ) );
}; // soundex()

module.exports = soundex;

},{"./string-soundex.js":"../../../node_modules/wink-nlp-utils/src/string-soundex.js"}],"../../../node_modules/wink-nlp-utils/src/dictionaries/stop_words.json":[function(require,module,exports) {
module.exports = [
  "i",
  "me",
  "my",
  "myself",
  "we",
  "our",
  "ours",
  "ourselves",
  "you",
  "your",
  "yours",
  "yourself",
  "yourselves",
  "he",
  "him",
  "his",
  "himself",
  "she",
  "her",
  "hers",
  "herself",
  "it",
  "its",
  "itself",
  "they",
  "them",
  "their",
  "theirs",
  "themselves",
  "what",
  "which",
  "who",
  "whom",
  "this",
  "that",
  "these",
  "those",
  "am",
  "is",
  "are",
  "was",
  "were",
  "be",
  "been",
  "being",
  "have",
  "has",
  "had",
  "having",
  "do",
  "does",
  "did",
  "doing",
  "would",
  "should",
  "could",
  "ought",
  "i'm",
  "you're",
  "he's",
  "she's",
  "it's",
  "we're",
  "they're",
  "i've",
  "you've",
  "we've",
  "they've",
  "i'd",
  "you'd",
  "he'd",
  "she'd",
  "we'd",
  "they'd",
  "i'll",
  "you'll",
  "he'll",
  "she'll",
  "we'll",
  "they'll",
  "let's",
  "that's",
  "who's",
  "what's",
  "here's",
  "there's",
  "when's",
  "where's",
  "why's",
  "how's",
  "a",
  "an",
  "the",
  "and",
  "but",
  "if",
  "or",
  "because",
  "as",
  "until",
  "while",
  "of",
  "at",
  "by",
  "for",
  "with",
  "about",
  "against",
  "between",
  "into",
  "through",
  "during",
  "before",
  "after",
  "above",
  "below",
  "to",
  "from",
  "up",
  "down",
  "in",
  "out",
  "on",
  "off",
  "over",
  "under",
  "again",
  "further",
  "then",
  "once",
  "here",
  "there",
  "when",
  "where",
  "why",
  "how",
  "all",
  "any",
  "both",
  "each",
  "few",
  "more",
  "most",
  "other",
  "some",
  "such",
  "only",
  "own",
  "same",
  "so",
  "than",
  "too",
  "very"
]
;
},{}],"../../../node_modules/wink-nlp-utils/src/tokens-remove-words.js":[function(require,module,exports) {
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of “wink-nlp-utils”.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//

var defaultStopWords = require( './dictionaries/stop_words.json' );
var words = require( './helper-return-words-filter.js' );
defaultStopWords = words( defaultStopWords );

// ## tokens

// ### removeWords
/**
 *
 * Removes the stop words from the input array of tokens.
 *
 * @alias tokens#removeWords
 * @param {string[]} tokens the input tokens.
 * @param {wordsFilter} [stopWords=defaultStopWords] default stop words are
 * loaded from `stop_words.json` located under the `src/dictionaries/` directory.
 * Custom stop words can be created using [helper.returnWordsFilter ](#helperreturnwordsfilter).
 * @return {string[]} balance tokens.
 * @example
 * removeWords( [ 'this', 'is', 'a', 'cat' ] );
 * // -> [ 'cat' ]
 */
var removeWords = function ( tokens, stopWords ) {
  var givenStopWords = ( stopWords || defaultStopWords );
  return tokens.filter( givenStopWords.exclude );
}; // removeWords()

module.exports = removeWords;

},{"./dictionaries/stop_words.json":"../../../node_modules/wink-nlp-utils/src/dictionaries/stop_words.json","./helper-return-words-filter.js":"../../../node_modules/wink-nlp-utils/src/helper-return-words-filter.js"}],"../../../node_modules/wink-nlp-utils/src/tokens-bow.js":[function(require,module,exports) {
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of “wink-nlp-utils”.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//

// ## string

// ### bagOfWords
/**
 *
 * Generates the bag of words from the input string. By default it
 * uses `word count` as it's frequency; but if `logCounts` parameter is set to true then
 * it will use `log2( word counts + 1 )` as it's frequency. It also has an alias **`bow()`**.
 *
 * @alias tokens#bagOfWords
 * @param {string[]} tokens the input tokens.
 * @param {number} [logCounts=false] a true value flags the use of `log2( word count + 1 )`
 * instead of just `word count` as frequency.
 * @param {function} [ifn=undefined] a function to build index; it is called for
 * every **unique occurrence of word** in `tokens`; and it receives the word and the `idx`
 * as input arguments. The `build()` function of [helper.returnIndexer](#helperreturnindexer)
 * may be used as `ifn`. If `undefined` then index is not built.
 * @param {number} [idx=undefined] the index; passed as the second argument to the `ifn`
 * function.
 * @return {object} bag of words from tokens.
 * @example
 * bagOfWords( [ 'rain', 'rain', 'go', 'away' ] );
 * // -> { rain: 2, go: 1, away: 1 }
 * bow( [ 'rain', 'rain', 'go', 'away' ], true );
 * // -> { rain: 1.584962500721156, go: 1, away: 1 }
 */
var bagOfWords = function ( tokens, logCounts, ifn, idx ) {
  var bow1 = Object.create( null ),
      i, imax,
      token,
      words;
  for ( i = 0, imax = tokens.length; i < imax; i += 1 ) {
    token = tokens[ i ];
    if ( ( typeof ifn === 'function' ) && !bow1[ token ] ) {
        ifn( token, idx );
    }
    bow1[ token ] = 1 + ( bow1[ token ] || 0 );
  }
  if ( !logCounts ) return ( bow1 );
  words = Object.keys( bow1 );
  for ( i = 0, imax = words.length; i < imax; i += 1 ) {
    // Add `1` to ensure non-zero count! (Note: log2(1) is 0)
    bow1[ words[ i ] ] = Math.log2( bow1[ words[ i ] ] + 1 );
  }
  return ( bow1 );
}; // bow()

module.exports = bagOfWords;

},{}],"../../../node_modules/wink-nlp-utils/src/tokens-sow.js":[function(require,module,exports) {
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of “wink-nlp-utils”.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//

// ## string

// ### setOfWords
/**
 *
 * Generates the set of words from the input string. It also has an alias **`sow()`**.
 *
 * @alias tokens#setOfWords
 * @param {string[]} tokens the input tokens.
 * @param {function} [ifn=undefined] a function to build index; it is called for
 * every **member word of the set **; and it receives the word and the `idx`
 * as input arguments. The `build()` function of [helper.returnIndexer](#helperreturnindexer)
 * may be used as `ifn`. If `undefined` then index is not built.
 * @param {number} [idx=undefined] the index; passed as the second argument to the `ifn`
 * function.
 * @return {set} of words from tokens.
 * @example
 * setOfWords( [ 'rain', 'rain', 'go', 'away' ] );
 * // -> Set { 'rain', 'go', 'away' }
 */
var setOfWords = function ( tokens, ifn, idx ) {
  var tset = new Set( tokens );
  if ( typeof ifn === 'function' ) {
    tset.forEach( function ( m ) {
        ifn( m, idx );
    } );
  }
  return ( tset );
}; // bow()

module.exports = setOfWords;

},{}],"../../../node_modules/wink-nlp-utils/src/tokens-propagate-negations.js":[function(require,module,exports) {
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of “wink-nlp-utils”.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
var rgx = require( './util_regexes.js' );

// ## string

// ### propagateNegations
/**
 *
 * It looks for negation tokens in the input array of tokens and propagates
 * negation to subsequent `upto` tokens by prefixing them by a `!`. It is useful
 * in handling text containing negations during tasks like similarity detection,
 * classification or search.
 *
 * @alias tokens#propagateNegations
 * @param {string[]} tokens the input tokens.
 * @param {number} [upto=2] number of tokens to be negated after the negation
 * token. Note, tokens are only negated either `upto` tokens or up to the token
 * preceeding the **`, . ; : ! ?`** punctuations.
 * @return {string[]} tokens with negation propagated.
 * @example
 * propagateNegations( [ 'mary', 'is', 'not', 'feeling', 'good', 'today' ] );
 * // -> [ 'mary', 'is', 'not', '!feeling', '!good', 'today' ]
 */
var propagateNegations = function ( tokens, upto ) {
  var i, imax, j, jmax;
  var tkns = tokens;
  var limit = upto || 2;
  for ( i = 0, imax = tkns.length; i < imax; i += 1 ) {
    if ( rgx.negations.test( tkns[ i ] ) ) {
      for ( j = i + 1, jmax = Math.min( imax, i + limit + 1 ); j < jmax; j += 1 ) {
        // Hit a punctuation mark, break out of the loop otherwise go *upto the limit*.
        // > TODO: promote to utilities regex, after test cases have been added.
        if ( ( /[\,\.\;\:\!\?]/ ).test( tkns[ j ] ) ) break;
        // Propoage negation: invert the token by prefixing a `!` to it.
        tkns[ j ] = '!' + tkns[ j ];
      }
      i = j;
    }
  }
  return tkns;
}; // propagateNegations()

module.exports = propagateNegations;

},{"./util_regexes.js":"../../../node_modules/wink-nlp-utils/src/util_regexes.js"}],"../../../node_modules/wink-nlp-utils/src/tokens-bigrams.js":[function(require,module,exports) {
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of “wink-nlp-utils”.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//

// ## tokens

// ### bigrams
/**
 *
 * Generates bigrams from the input tokens.
 *
 * @alias tokens#bigrams
 * @param {string[]} tokens the input tokens.
 * @return {string[]} the bigrams.
 * @example
 * bigrams( [ 'he', 'acted', 'decisively', 'today' ] );
 * // -> [ [ 'he', 'acted' ],
 * //      [ 'acted', 'decisively' ],
 * //      [ 'decisively', 'today' ] ]
 */
var bigrams = function ( tokens ) {
  // Bigrams will be stored here.
  var bgs = [];
  // Helper variables.
  var i, imax;
  // Create bigrams.
  for ( i = 0, imax = tokens.length - 1; i < imax; i += 1 ) {
    bgs.push( [ tokens[ i ], tokens[ i + 1 ] ] );
  }
  return bgs;
}; // bigrams()

module.exports = bigrams;

},{}],"../../../node_modules/wink-nlp-utils/src/tokens-append-bigrams.js":[function(require,module,exports) {
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of “wink-nlp-utils”.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//

// ## tokens

// ### appendBigrams
/**
 *
 * Generates bigrams from the input tokens and appends them to the input tokens.
 *
 * @alias tokens#appendBigrams
 * @param {string[]} tokens the input tokens.
 * @return {string[]} the input tokens appended with their bigrams.
 * @example
 * appendBigrams( [ 'he', 'acted', 'decisively', 'today' ] );
 * // -> [ 'he',
 * //      'acted',
 * //      'decisively',
 * //      'today',
 * //      'he_acted',
 * //      'acted_decisively',
 * //      'decisively_today' ]
 */
var appendBigrams = function ( tokens ) {
  var i, imax;
  for ( i = 0, imax = tokens.length - 1; i < imax; i += 1 ) {
    tokens.push( tokens[ i ] + '_' + tokens[ i + 1 ] );
  }
  return tokens;
}; // appendBigrams()

module.exports = appendBigrams;

},{}],"../../../node_modules/wink-nlp-utils/src/wink-nlp-utils.js":[function(require,module,exports) {
//     wink-nlp-utils
//     NLP Functions for amplifying negations, managing elisions,
//     creating ngrams, stems, phonetic codes to tokens and more.
//
//     Copyright (C) 2017-19  GRAYPE Systems Private Limited
//
//     This file is part of “wink-nlp-utils”.
//
//     Permission is hereby granted, free of charge, to any person obtaining a
//     copy of this software and associated documentation files (the "Software"),
//     to deal in the Software without restriction, including without limitation
//     the rights to use, copy, modify, merge, publish, distribute, sublicense,
//     and/or sell copies of the Software, and to permit persons to whom the
//     Software is furnished to do so, subject to the following conditions:
//
//     The above copyright notice and this permission notice shall be included
//     in all copies or substantial portions of the Software.
//
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//     THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//     DEALINGS IN THE SOFTWARE.

//
var porter2Stemmer = require( 'wink-porter2-stemmer' );

// ### Prepare Name Space

// Create prepare name space.
var prepare = Object.create( null );

/**
 * Helper
 * @namespace helper
 */
prepare.helper = Object.create( null );

// Words
prepare.helper.returnWordsFilter = require( './helper-return-words-filter.js' );
prepare.helper.words = prepare.helper.returnWordsFilter;
// Make better **alias** name for the `word()` function.

// Index
prepare.helper.index = require( './helper-return-indexer.js' );
// Make better **alias** name for the `index()` function.
prepare.helper.returnIndexer = prepare.helper.index;

// Return Quoted Text Extractor
prepare.helper.returnQuotedTextExtractor = require( './helper-return-quoted-text-extractor.js' );

/**
 * String
 * @namespace string
 */
prepare.string = Object.create( null );

// Lower Case
prepare.string.lowerCase = require( './string-lower-case.js' );
// Upper Case
prepare.string.upperCase = require( './string-upper-case.js' );
// Trim
prepare.string.trim = require( './string-trim.js' );
// Remove Extra Spaces
prepare.string.removeExtraSpaces = require( './string-remove-extra-spaces.js' );
// Retain Alpha-numerics
prepare.string.retainAlphaNums = require( './string-retain-alpha-nums.js' );
// Extract Person's Name
prepare.string.extractPersonsName = require( './string-extract-persons-name.js' );
// Extract Run of Capital Words
prepare.string.extractRunOfCapitalWords = require( './string-extract-run-of-capital-words.js' );
// Remove Punctuations
prepare.string.removePunctuations = require( './string-remove-punctuations.js' );
// Remove Special Chars
prepare.string.removeSplChars = require( './string-remove-spl-chars.js' );
// Remove HTML Tags
prepare.string.removeHTMLTags = require( './string-remove-html-tags.js' );
// Remove Elisions
prepare.string.removeElisions = require( './string-remove-elisions.js' );
// Split Elisions
prepare.string.splitElisions = require( './string-split-elisions.js' );
// Amplify Not Elision
prepare.string.amplifyNotElision = require( './string-amplify-not-elision' );
// Marker
prepare.string.marker = require( './string-marker.js' );
// SOC
prepare.string.soc = require( './string-soc.js' );
prepare.string.setOfChars = require( './string-soc.js' );
// NGrams
prepare.string.ngram = require( './string-ngram.js' );
// Edge NGrams
prepare.string.edgeNGrams = require( './string-edge-ngrams.js' );
// BONG
prepare.string.bong = require( './string-bong.js' );
prepare.string.bagOfNGrams = require( './string-bong.js' );
// SONG
prepare.string.song = require( './string-song.js' );
prepare.string.setOfNGrams = require( './string-song.js' );
// Sentences
prepare.string.sentences = require( './string-sentences.js' );
// Compose Corpus
prepare.string.composeCorpus = require( './string-compose-corpus.js' );
// Tokenize0
prepare.string.tokenize0 = require( './string-tokenize0.js' );
// Tokenize
prepare.string.tokenize = require( './string-tokenize.js' );
// #### Stem
prepare.string.stem = porter2Stemmer;
// Phonetize
prepare.string.phonetize = require( './string-phonetize.js' );
// Soundex
prepare.string.soundex = require( './string-soundex.js' );

/**
 * Tokens
 * @namespace tokens
 */
prepare.tokens = Object.create( null );

// Stem
prepare.tokens.stem = require( './tokens-stem.js' );
// Phonetize
prepare.tokens.phonetize = require( './tokens-phonetize.js' );
// Soundex
prepare.tokens.soundex = require( './tokens-soundex.js' );
// Remove Words
prepare.tokens.removeWords = require( './tokens-remove-words.js' );
// BOW
prepare.tokens.bow = require( './tokens-bow.js' );
prepare.tokens.bagOfWords = require( './tokens-bow.js' );
// SOW
prepare.tokens.sow = require( './tokens-sow.js' );
prepare.tokens.setOfWords = require( './tokens-sow.js' );
// Propagate Negations
prepare.tokens.propagateNegations = require( './tokens-propagate-negations.js' );
// Bigrams
prepare.tokens.bigrams = require( './tokens-bigrams.js' );
// Append Bigrams
prepare.tokens.appendBigrams = require( './tokens-append-bigrams.js' );

// Export prepare.
module.exports = prepare;

},{"wink-porter2-stemmer":"../../../node_modules/wink-porter2-stemmer/src/wink-porter2-stemmer.js","./helper-return-words-filter.js":"../../../node_modules/wink-nlp-utils/src/helper-return-words-filter.js","./helper-return-indexer.js":"../../../node_modules/wink-nlp-utils/src/helper-return-indexer.js","./helper-return-quoted-text-extractor.js":"../../../node_modules/wink-nlp-utils/src/helper-return-quoted-text-extractor.js","./string-lower-case.js":"../../../node_modules/wink-nlp-utils/src/string-lower-case.js","./string-upper-case.js":"../../../node_modules/wink-nlp-utils/src/string-upper-case.js","./string-trim.js":"../../../node_modules/wink-nlp-utils/src/string-trim.js","./string-remove-extra-spaces.js":"../../../node_modules/wink-nlp-utils/src/string-remove-extra-spaces.js","./string-retain-alpha-nums.js":"../../../node_modules/wink-nlp-utils/src/string-retain-alpha-nums.js","./string-extract-persons-name.js":"../../../node_modules/wink-nlp-utils/src/string-extract-persons-name.js","./string-extract-run-of-capital-words.js":"../../../node_modules/wink-nlp-utils/src/string-extract-run-of-capital-words.js","./string-remove-punctuations.js":"../../../node_modules/wink-nlp-utils/src/string-remove-punctuations.js","./string-remove-spl-chars.js":"../../../node_modules/wink-nlp-utils/src/string-remove-spl-chars.js","./string-remove-html-tags.js":"../../../node_modules/wink-nlp-utils/src/string-remove-html-tags.js","./string-remove-elisions.js":"../../../node_modules/wink-nlp-utils/src/string-remove-elisions.js","./string-split-elisions.js":"../../../node_modules/wink-nlp-utils/src/string-split-elisions.js","./string-amplify-not-elision":"../../../node_modules/wink-nlp-utils/src/string-amplify-not-elision.js","./string-marker.js":"../../../node_modules/wink-nlp-utils/src/string-marker.js","./string-soc.js":"../../../node_modules/wink-nlp-utils/src/string-soc.js","./string-ngram.js":"../../../node_modules/wink-nlp-utils/src/string-ngram.js","./string-edge-ngrams.js":"../../../node_modules/wink-nlp-utils/src/string-edge-ngrams.js","./string-bong.js":"../../../node_modules/wink-nlp-utils/src/string-bong.js","./string-song.js":"../../../node_modules/wink-nlp-utils/src/string-song.js","./string-sentences.js":"../../../node_modules/wink-nlp-utils/src/string-sentences.js","./string-compose-corpus.js":"../../../node_modules/wink-nlp-utils/src/string-compose-corpus.js","./string-tokenize0.js":"../../../node_modules/wink-nlp-utils/src/string-tokenize0.js","./string-tokenize.js":"../../../node_modules/wink-nlp-utils/src/string-tokenize.js","./string-phonetize.js":"../../../node_modules/wink-nlp-utils/src/string-phonetize.js","./string-soundex.js":"../../../node_modules/wink-nlp-utils/src/string-soundex.js","./tokens-stem.js":"../../../node_modules/wink-nlp-utils/src/tokens-stem.js","./tokens-phonetize.js":"../../../node_modules/wink-nlp-utils/src/tokens-phonetize.js","./tokens-soundex.js":"../../../node_modules/wink-nlp-utils/src/tokens-soundex.js","./tokens-remove-words.js":"../../../node_modules/wink-nlp-utils/src/tokens-remove-words.js","./tokens-bow.js":"../../../node_modules/wink-nlp-utils/src/tokens-bow.js","./tokens-sow.js":"../../../node_modules/wink-nlp-utils/src/tokens-sow.js","./tokens-propagate-negations.js":"../../../node_modules/wink-nlp-utils/src/tokens-propagate-negations.js","./tokens-bigrams.js":"../../../node_modules/wink-nlp-utils/src/tokens-bigrams.js","./tokens-append-bigrams.js":"../../../node_modules/wink-nlp-utils/src/tokens-append-bigrams.js"}],"../../../node_modules/lodash.deburr/index.js":[function(require,module,exports) {
var global = arguments[3];
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match Latin Unicode letters (excluding mathematical operators). */
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

/** Used to compose unicode character classes. */
var rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
    rsComboSymbolsRange = '\\u20d0-\\u20f0';

/** Used to compose unicode capture groups. */
var rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']';

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
var reComboMark = RegExp(rsCombo, 'g');

/** Used to map Latin Unicode letters to basic Latin letters. */
var deburredLetters = {
  // Latin-1 Supplement block.
  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
  '\xc7': 'C',  '\xe7': 'c',
  '\xd0': 'D',  '\xf0': 'd',
  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
  '\xd1': 'N',  '\xf1': 'n',
  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
  '\xc6': 'Ae', '\xe6': 'ae',
  '\xde': 'Th', '\xfe': 'th',
  '\xdf': 'ss',
  // Latin Extended-A block.
  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
  '\u0134': 'J',  '\u0135': 'j',
  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
  '\u0174': 'W',  '\u0175': 'w',
  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
  '\u0132': 'IJ', '\u0133': 'ij',
  '\u0152': 'Oe', '\u0153': 'oe',
  '\u0149': "'n", '\u017f': 'ss'
};

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */
var deburrLetter = basePropertyOf(deburredLetters);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */
function deburr(string) {
  string = toString(string);
  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
}

module.exports = deburr;

},{}],"../../../node_modules/semantic-password-generator/src/semantic.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var wink_nlp_utils_1 = __importDefault(require("wink-nlp-utils"));

var lodash_deburr_1 = __importDefault(require("lodash.deburr"));

function semantic(extract) {
  return [wink_nlp_utils_1.default.string.removeHTMLTags, wink_nlp_utils_1.default.string.removeExtraSpaces, lodash_deburr_1.default, wink_nlp_utils_1.default.string.sentences].reduce(function (memo, fn) {
    return fn(memo);
  }, extract).map(wink_nlp_utils_1.default.string.removePunctuations);
}

exports.default = semantic;
},{"wink-nlp-utils":"../../../node_modules/wink-nlp-utils/src/wink-nlp-utils.js","lodash.deburr":"../../../node_modules/lodash.deburr/index.js"}],"../../../node_modules/lodash.random/index.js":[function(require,module,exports) {
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991,
    MAX_INTEGER = 1.7976931348623157e+308,
    NAN = 0 / 0;

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Built-in method references without a dependency on `root`. */
var freeParseFloat = parseFloat,
    freeParseInt = parseInt;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeFloor = Math.floor,
    nativeMin = Math.min,
    nativeRandom = Math.random;

/**
 * The base implementation of `_.random` without support for returning
 * floating-point numbers.
 *
 * @private
 * @param {number} lower The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the random number.
 */
function baseRandom(lower, upper) {
  return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

/**
 * Produces a random number between the inclusive `lower` and `upper` bounds.
 * If only one argument is provided a number between `0` and the given number
 * is returned. If `floating` is `true`, or either `lower` or `upper` are
 * floats, a floating-point number is returned instead of an integer.
 *
 * **Note:** JavaScript follows the IEEE-754 standard for resolving
 * floating-point values which can produce unexpected results.
 *
 * @static
 * @memberOf _
 * @since 0.7.0
 * @category Number
 * @param {number} [lower=0] The lower bound.
 * @param {number} [upper=1] The upper bound.
 * @param {boolean} [floating] Specify returning a floating-point number.
 * @returns {number} Returns the random number.
 * @example
 *
 * _.random(0, 5);
 * // => an integer between 0 and 5
 *
 * _.random(5);
 * // => also an integer between 0 and 5
 *
 * _.random(5, true);
 * // => a floating-point number between 0 and 5
 *
 * _.random(1.2, 5.2);
 * // => a floating-point number between 1.2 and 5.2
 */
function random(lower, upper, floating) {
  if (floating && typeof floating != 'boolean' && isIterateeCall(lower, upper, floating)) {
    upper = floating = undefined;
  }
  if (floating === undefined) {
    if (typeof upper == 'boolean') {
      floating = upper;
      upper = undefined;
    }
    else if (typeof lower == 'boolean') {
      floating = lower;
      lower = undefined;
    }
  }
  if (lower === undefined && upper === undefined) {
    lower = 0;
    upper = 1;
  }
  else {
    lower = toFinite(lower);
    if (upper === undefined) {
      upper = lower;
      lower = 0;
    } else {
      upper = toFinite(upper);
    }
  }
  if (lower > upper) {
    var temp = lower;
    lower = upper;
    upper = temp;
  }
  if (floating || lower % 1 || upper % 1) {
    var rand = nativeRandom();
    return nativeMin(lower + (rand * (upper - lower + freeParseFloat('1e-' + ((rand + '').length - 1)))), upper);
  }
  return baseRandom(lower, upper);
}

module.exports = random;

},{}],"../../../node_modules/lodash.isnumber/index.js":[function(require,module,exports) {
/**
 * lodash 3.0.3 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** `Object#toString` result references. */
var numberTag = '[object Number]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are classified
 * as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */
function isNumber(value) {
  return typeof value == 'number' ||
    (isObjectLike(value) && objectToString.call(value) == numberTag);
}

module.exports = isNumber;

},{}],"../../../node_modules/lodash.identity/index.js":[function(require,module,exports) {
/**
 * lodash 3.0.0 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/**
 * This method returns the first argument provided to it.
 *
 * @static
 * @memberOf _
 * @category Utility
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'user': 'fred' };
 * _.identity(object) === object;
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;

},{}],"../../../node_modules/semantic-password-generator/src/password.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLength = exports.getMinLength = exports.getMaxLength = void 0;
var MIN_PASSWORD_LENGTH = 8;

exports.getMaxLength = function (sentences) {
  return sentences.reduce(function (memo, _a) {
    var length = _a.length;
    return length > memo ? length : memo;
  }, Number.MIN_SAFE_INTEGER);
};

exports.getMinLength = function (inputLength) {
  return Math.max(inputLength, MIN_PASSWORD_LENGTH);
};

exports.getLength = function (inputLength, maxLength) {
  return Math.min(exports.getMinLength(inputLength), maxLength);
};
},{}],"../../../node_modules/semantic-password-generator/src/transform/length.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var DEFAULT_WORD_MAP = [0, 0];
/**
 * Given a desired length break the sentence with the minimum required words.
 */

exports.default = function (length) {
  return function transformLength(base) {
    var words = base.split(' ');
    var breakingWord = words.map(function (word) {
      return [word, word.length];
    }).reduce(function (memo, _a) {
      var word = _a[0],
          wordLength = _a[1];
      var lastWordMap = memo[memo.length - 1] || DEFAULT_WORD_MAP;
      return memo.concat([[word, wordLength + lastWordMap[1]]]);
    }, []).filter(function (_a) {
      var _ = _a[0],
          stack = _a[1];
      return stack < length;
    }).length;
    return words.slice(0, breakingWord + 1).join(' ');
  };
};
},{}],"../../../node_modules/semantic-password-generator/src/shall.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.common = exports.high = exports.regular = exports.low = exports.weird = void 0;
var MAX = 100;
var DEFAULT_RATIO = MAX / 2;
/**
 * Given a probabilistic ratio match against a random number to get a true/false.
 * Default value is half the max (50); simulating a flipping coin.
 */

var shall = function shall(ratio) {
  if (ratio === void 0) {
    ratio = DEFAULT_RATIO;
  }

  return Math.random() * MAX < Math.min(ratio, MAX);
};
/**
 * Expose 4 common probabilistic types. For 10%, 25%, 50%, 75% and 90%
 */


exports.weird = function () {
  return shall(10);
};

exports.low = function () {
  return shall(25);
};

exports.regular = function () {
  return shall();
};

exports.high = function () {
  return shall(75);
};

exports.common = function () {
  return shall(90);
};
},{}],"../../../node_modules/semantic-password-generator/src/transform/leet.ts":[function(require,module,exports) {
"use strict";

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var shall = __importStar(require("../shall"));

var LEET_DICT = {
  a: 4,
  b: 8,
  e: 3,
  g: 9,
  l: 1,
  o: 0,
  s: 5,
  t: 7,
  z: 2
};
/**
 * Randomly replace some char by the leet equivalent if any.
 */

exports.default = function () {
  return function transformLeet(base) {
    return base.split('').map(function (char) {
      return [char, LEET_DICT[char.toLowerCase()]];
    }).map(function (_a) {
      var char = _a[0],
          leet = _a[1];
      return leet && shall.weird() ? leet : char;
    }).join('');
  };
};
},{"../shall":"../../../node_modules/semantic-password-generator/src/shall.ts"}],"../../../node_modules/semantic-password-generator/src/transform/case.ts":[function(require,module,exports) {
"use strict";

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var shall = __importStar(require("../shall"));
/**
 * Randomly transform to upper case some chars. It assumes that most
 * of the base chars are lower case.
 */


exports.default = function () {
  return function transformCase(base) {
    return base.split('').map(function (char) {
      return shall.low() ? char.toUpperCase() : char;
    }).join('');
  };
};
},{"../shall":"../../../node_modules/semantic-password-generator/src/shall.ts"}],"../../../node_modules/semantic-password-generator/src/transform/random.ts":[function(require,module,exports) {
"use strict";

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var lodash_random_1 = __importDefault(require("lodash.random"));

var shall = __importStar(require("../shall"));

var ASCII_LOWER = 37;
var ASCII_HIGHER = 126;
var EMPTY_CHAR = '';

var addRandomChar = function addRandomChar() {
  if (shall.common()) return EMPTY_CHAR;
  return String.fromCharCode(lodash_random_1.default(ASCII_LOWER, ASCII_HIGHER));
};
/**
 * Randomly add some ASCII safe chars either at the beginning, the end or both
 * sides of each word.
 */


exports.default = function () {
  return function transformRandom(base) {
    return base.split(' ').map(function (word) {
      return "" + addRandomChar() + word + addRandomChar();
    }).join(' ');
  };
};
},{"lodash.random":"../../../node_modules/lodash.random/index.js","../shall":"../../../node_modules/semantic-password-generator/src/shall.ts"}],"../../../node_modules/semantic-password-generator/src/transform/symbols.ts":[function(require,module,exports) {
"use strict";

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var lodash_random_1 = __importDefault(require("lodash.random"));

var shall = __importStar(require("../shall"));

var DEFAULT_SYMBOL = '.';
var SYMBOLS = ("@#$%{}[]()/~,;:><" + DEFAULT_SYMBOL).split('');
var EMPTY_CHAR = '';
var RX_WHITE_SPACE = / /g;
/**
 * Replace white spaces either by a random symbol or an empty char (remove).
 * Note that this transformer gets rid of the white spaces. Hence has to be
 * the last one always.
 * If it's disabled always return the DEFAULT_SYMBOL
 */

exports.default = function (isEnabled) {
  return function transformSymbols(base) {
    return base.replace(RX_WHITE_SPACE, function () {
      if (!isEnabled) return DEFAULT_SYMBOL;
      return shall.regular() ? SYMBOLS[lodash_random_1.default(SYMBOLS.length - 1)] : EMPTY_CHAR;
    });
  };
};
},{"lodash.random":"../../../node_modules/lodash.random/index.js","../shall":"../../../node_modules/semantic-password-generator/src/shall.ts"}],"../../../node_modules/semantic-password-generator/src/generator.ts":[function(require,module,exports) {
"use strict";

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var lodash_random_1 = __importDefault(require("lodash.random"));

var lodash_isnumber_1 = __importDefault(require("lodash.isnumber"));

var lodash_identity_1 = __importDefault(require("lodash.identity"));

var password = __importStar(require("./password"));

var length_1 = __importDefault(require("./transform/length"));

var leet_1 = __importDefault(require("./transform/leet"));

var case_1 = __importDefault(require("./transform/case"));

var random_1 = __importDefault(require("./transform/random"));

var symbols_1 = __importDefault(require("./transform/symbols"));

var DEFAULT_SENTENCES = ['']; // allows init of all methods

var DEFAULT_ARGS = {
  case: false,
  length: 24,
  leet: false,
  random: false,
  symbols: false
};

var sanitizeOptions = function sanitizeOptions(args) {
  if (args === void 0) {
    args = {};
  }

  return __assign(__assign({}, DEFAULT_ARGS), lodash_isnumber_1.default(args) ? {
    length: args
  } : args);
};

function createGenerator(sentences) {
  if (sentences === void 0) {
    sentences = DEFAULT_SENTENCES;
  }

  var maxLength = password.getMaxLength(sentences);
  return function generator(args) {
    var options = sanitizeOptions(args);
    var length = password.getLength(options.length, maxLength);
    var data = sentences.filter(function (x) {
      return x.length >= length;
    });
    var base = data[lodash_random_1.default(data.length - 1)];
    if (!base) return null;
    return [length_1.default(length), options.leet && leet_1.default(), options.case && case_1.default(), options.random && random_1.default(), symbols_1.default(options.symbols)].map(function (fn) {
      return fn || lodash_identity_1.default;
    }).reduce(function (memo, fn) {
      return fn(memo);
    }, base);
  };
}

exports.default = createGenerator;
},{"lodash.random":"../../../node_modules/lodash.random/index.js","lodash.isnumber":"../../../node_modules/lodash.isnumber/index.js","lodash.identity":"../../../node_modules/lodash.identity/index.js","./password":"../../../node_modules/semantic-password-generator/src/password.ts","./transform/length":"../../../node_modules/semantic-password-generator/src/transform/length.ts","./transform/leet":"../../../node_modules/semantic-password-generator/src/transform/leet.ts","./transform/case":"../../../node_modules/semantic-password-generator/src/transform/case.ts","./transform/random":"../../../node_modules/semantic-password-generator/src/transform/random.ts","./transform/symbols":"../../../node_modules/semantic-password-generator/src/transform/symbols.ts"}],"../../../node_modules/semantic-password-generator/src/index.ts":[function(require,module,exports) {
"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var request_1 = __importDefault(require("./request"));

var semantic_1 = __importDefault(require("./semantic"));

var generator_1 = __importDefault(require("./generator"));

function spg() {
  return __awaiter(this, void 0, void 0, function () {
    var article, sentences;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , request_1.default()];

        case 1:
          article = _a.sent();
          sentences = semantic_1.default(article);
          return [2
          /*return*/
          , generator_1.default(sentences)];
      }
    });
  });
}

exports.default = spg;
},{"./request":"../../../node_modules/semantic-password-generator/src/request.ts","./semantic":"../../../node_modules/semantic-password-generator/src/semantic.ts","./generator":"../../../node_modules/semantic-password-generator/src/generator.ts"}],"js/generator.ts":[function(require,module,exports) {
"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addGenerator = void 0;

var semantic_password_generator_1 = __importDefault(require("semantic-password-generator"));

var elements_1 = require("./elements");

var updateHint = function updateHint(password) {
  var length = password.length - 8;
  if (length < 18) return elements_1.$hint.innerText = 'Weak';
  if (length < 24) return elements_1.$hint.innerText = 'Good';
  return elements_1.$hint.innerText = 'Strong 💪';
};

exports.addGenerator = function () {
  return __awaiter(void 0, void 0, void 0, function () {
    var generator, update;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , semantic_password_generator_1.default()];

        case 1:
          generator = _a.sent();

          update = function update() {
            var password = generator({
              length: Number(elements_1.$slider.value),
              case: elements_1.$case.checked,
              leet: elements_1.$leet.checked,
              random: elements_1.$random.checked,
              symbols: elements_1.$symbols.checked
            });
            updateHint(password);
            elements_1.$password.value = password;
          };

          update();
          elements_1.$renew.addEventListener('click', function () {
            return __awaiter(void 0, void 0, void 0, function () {
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    return [4
                    /*yield*/
                    , semantic_password_generator_1.default()];

                  case 1:
                    generator = _a.sent();
                    update();
                    return [2
                    /*return*/
                    ];
                }
              });
            });
          });
          [elements_1.$case, elements_1.$leet, elements_1.$random, elements_1.$symbols, elements_1.$slider].forEach(function ($) {
            $.addEventListener('change', update);
          });
          return [2
          /*return*/
          ];
      }
    });
  });
};
},{"semantic-password-generator":"../../../node_modules/semantic-password-generator/src/index.ts","./elements":"js/elements.ts"}],"js/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var clipboard_1 = require("./clipboard");

var generator_1 = require("./generator");

clipboard_1.addClipboard();
generator_1.addGenerator();
},{"./clipboard":"js/clipboard.ts","./generator":"js/generator.ts"}],"../../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60005" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.ts"], null)
//# sourceMappingURL=/js.52877fb3.js.map