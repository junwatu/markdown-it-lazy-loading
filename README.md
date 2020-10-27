# markdown-it-lazy-loading

Add `loading="lazy"` attribute to markdown image.

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
