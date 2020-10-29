const MarkdownIt = require("markdown-it");
const MarkdownItLazyLoading = require("./index.js");

const TEST_URL = "https://sajen.id/assets/images/articles/ga-wf-1.png";

describe("markdown-it-lazy-loading", () => {
  it("Add loading 'lazy' attr to img tag", () => {
    const lzAttr = {
      img: "lazy",
    };
    const mdtxt = `sono sono ![alt text](${TEST_URL}) kembang`;
    const htmltxt = `<p>sono sono <noscript class="loading-lazy"><img src="${TEST_URL}" alt="alt text" loading="lazy"></noscript> kembang</p>`;

    const md = new MarkdownIt();
    md.use(MarkdownItLazyLoading, lzAttr);
    
    expect(md.render(mdtxt).trim()).toBe(htmltxt);
  });

  it("Add loading 'auto' attr to img tag", () => {
    const lzAttr = {
      img: "auto",
    };
    const mdtxt = `![alt text](${TEST_URL})`;
    const htmltxt = `<p><img src="${TEST_URL}" alt="alt text" loading="auto"></p>`;

    const md = new MarkdownIt();
    md.use(MarkdownItLazyLoading, lzAttr);

    expect(md.render(mdtxt).trim()).toBe(htmltxt);
  });

  it("Add loading 'eager' attr to img tag", () => {
    const lzAttr = {
      img: "eager",
    };
    const mdtxt = `![alt text](${TEST_URL})`;
    const htmltxt = `<p><img src="${TEST_URL}" alt="alt text" loading="eager"></p>`;

    const md = new MarkdownIt();
    md.use(MarkdownItLazyLoading, lzAttr);

    expect(md.render(mdtxt).trim()).toBe(htmltxt);
  });
});
