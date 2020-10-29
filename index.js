"use strict";

const Token = require("markdown-it/lib/token");
const toArray = (arr) => (Array.isArray(arr) ? arr : [arr]);
let lzAttr = {};

/**
 * loading lazy polyfill noscript
 */

let _nsOpenToken = new Token("noscript_open", "noscript", 1);
_nsOpenToken.attrSet("class", "loading-lazy");
let _nsCloseToken = new Token("noscript_close", "noscript", -1);
let _tmp = [];

function parseTokens(tokens) {
  tokens.forEach((token, idx, arr) => {
    if (lzAttr[token.tag] && token.tag == "img") {
      _tmp = []
      const addition = toArray(lzAttr[token.tag]);
      token.attrSet("loading", [...addition].join(" "));
      _tmp.push({ idx, token });
    }
    if (token.children) {
      parseTokens(token.children);
    }
  });
}

function parseState(state) {
  parseTokens(state.tokens);

  state.tokens.forEach((token) => {
    if (token.type === "inline") {
      let child = token.children;
      let beforeIndex = _tmp[0].idx;
      let afterIndex = beforeIndex + 2;

      child.splice(beforeIndex, 0, _nsOpenToken);
      child.splice(afterIndex, 0, _nsCloseToken);
    }
  });
}

function markdownItLazyLoading(md, _lzAttr) {
  lzAttr = _lzAttr || {};
  md.core.ruler.push("markdown-it-lazy-loading", parseState);
}

module.exports = markdownItLazyLoading;
