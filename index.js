"use strict";

let lzAttr = {};
const toArray = (arr) => (Array.isArray(arr) ? arr : [arr]);

function parseTokens(tokens) {
  tokens.forEach((token) => {
    if (lzAttr[token.tag]) {
      const addition = toArray(lzAttr[token.tag]);
      token.attrSet("loading", [...addition].join(" "));
    }
    if (token.children) {
      parseTokens(token.children);
    }
  });
}

function parseState(state) {
  parseTokens(state.tokens);
}

function markdownItLazyLoading(md, _lzAttr) {
  lzAttr = _lzAttr || {};
  md.core.ruler.push("markdown-it-lazy-loading", parseState);
}

module.exports = markdownItLazyLoading;
