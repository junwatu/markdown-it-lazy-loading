const MarkdownIt = require("markdown-it");
const MarkdownItLazyLoading = require("./index.js");

describe("markdown-it-lazy-loading", () => {
  it("Add loading 'lazy' attr to img tag", () => {
    const lzAttr = {
      img: "lazy",
    };
    const mdtxt = "![alt text](https://sajen.id/assets/images/articles/ga-wf-1.png)";
    const htmltxt =
      '<p><img src="https://sajen.id/assets/images/articles/ga-wf-1.png" alt="alt text" loading="lazy"></p>';

    const md = new MarkdownIt();
    md.use(MarkdownItLazyLoading, lzAttr);

    expect(md.render(mdtxt).trim()).toBe(htmltxt);
  });

  it("Add loading 'auto' attr to img tag", () => {
    const lzAttr = {
      img: "auto",
    };
    const mdtxt = "![alt text](https://sajen.id/assets/images/articles/ga-wf-1.png)";
    const htmltxt =
      '<p><img src="https://sajen.id/assets/images/articles/ga-wf-1.png" alt="alt text" loading="auto"></p>';

    const md = new MarkdownIt();
    md.use(MarkdownItLazyLoading, lzAttr);

    expect(md.render(mdtxt).trim()).toBe(htmltxt);
  });

  
  it("Add loading 'eager' attr to img tag", () => {
    const lzAttr = {
      img: "eager",
    };
    const mdtxt = "![alt text](https://sajen.id/assets/images/articles/ga-wf-1.png)";
    const htmltxt =
      '<p><img src="https://sajen.id/assets/images/articles/ga-wf-1.png" alt="alt text" loading="eager"></p>';

    const md = new MarkdownIt();
    md.use(MarkdownItLazyLoading, lzAttr);

    expect(md.render(mdtxt).trim()).toBe(htmltxt);
  });  
});
