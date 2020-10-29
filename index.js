"use strict";

const Token = require("markdown-it/lib/token");
const toArray = (arr) => (Array.isArray(arr) ? arr : [arr]);

let _tmp = [];
let lzAttr = {};
/**
 * loading lazy polyfill noscript
 */

let _nsOpenToken = new Token("noscript_open", "noscript", 0);
_nsOpenToken.attrSet("class", "loading-lazy");
let _nsCloseToken = new Token("noscript_close", "noscript", -1);

function parseTokens(tokens) {
  tokens.forEach((token, idx, arr) => {
    if (lzAttr[token.tag]) {
      _tmp = [];
      const addition = toArray(lzAttr[token.tag]);
      token.attrSet("loading", [...addition].join(" "));
      _tmp.push(token);
    }

    if (token.children) {
      parseTokens(token.children);
    }
  });
}

function parseState(state) {
  parseTokens(state.tokens);
  //state.tokens = [_nsOpenToken, _tmp[0], _nsCloseToken];
}

function markdownItLazyLoading(md, _lzAttr) {
  lzAttr = _lzAttr || {};
  md.core.ruler.push("markdown-it-lazy-loading", parseState);
}

module.exports = markdownItLazyLoading;
