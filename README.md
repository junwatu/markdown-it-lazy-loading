# markdown-it-lazy-loading

This is a plugin for the [markdown-it](https://github.com/markdown-it/markdown-it) markdown parser.
This plugin add `loading="lazy"` attribute to markdown image.

Install
---

```powershell
npm install @junwatu/markdown-it-lazy-loading --save-dev
```


## How to use

Add `lazy` loading attribute to `img` tag.

```javascript
const MarkdownIt = require("markdown-it");
const markdownItLazyLoading = require("@junwatu/markdown-it-lazy-loading");

const mdText = "![ohhh](/some/images/ohhh.png)";
const lzAttr = { img: "lazy" };
const md = MarkdownIt().use(markdownItLazyLoading, lzAttr);
console.log(md.render(mdText));
// <img loading="lazy" href="/some/images/ohhh.png" alt="ohhh">Hello</img>
```

---

MIT (c) 2020
