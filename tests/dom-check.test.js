const sizeOf = require("image-size");
const { doms, INDEX, ABOUT, CONTACT } = require("./dom-check.js");

const docs = doms.map(dom => dom.window.document);

// since tests are expected to run synchronously, saving image info
const images = [];

/**********************************/
/* tests from previous assignment */
/**********************************/
test("<head> should have a <title>", () =>
  docs.forEach(doc => expect(doc.querySelector("title")).not.toBeNull()));

test("<head> should have a <meta> description element", () =>
  docs.forEach(doc =>
    expect(doc.querySelector("meta[name=description]")).not.toBeNull()
  ));

test("all HTML files should contain an <h1>, and only one <h1>", () =>
  docs.forEach(doc => expect(doc.querySelectorAll("h1").length).toBe(1)));

test("all HTML files should contain favicon information", () =>
  docs.forEach(doc =>
    expect(doc.querySelector("link[rel='shortcut icon']")).not.toBeNull()
  ));

// header and nav on all pages
test("all index.html files must contain a <header>", () =>
  docs.forEach(doc => expect(doc.querySelector("header")).not.toBeNull()));

test("all <header> elements must contain a <nav> element", () =>
  docs.forEach(doc => expect(doc.querySelector("header>nav")).not.toBeNull()));

test("menu items in header <nav> must be in an <ul>", () =>
  docs.forEach(doc =>
    expect(doc.querySelector("header>nav>ul")).not.toBeNull()
  ));

// main index.html tests
test("main index.html must contain a <main>", () =>
  expect(docs[INDEX].querySelector("main")).not.toBeNull());

test("<main> must contain two <article> elements", () => {
  const articles = docs[INDEX].querySelectorAll("article");
  expect(articles.length).toBeGreaterThanOrEqual(2);
});

test("each <article> must contain an <h2> and at least one <p>", () => {
  const articles = docs[INDEX].querySelectorAll("article");
  articles.forEach(article => {
    expect(article.querySelector("h2")).not.toBeNull();
    expect(article.querySelectorAll("p")).not.toBeNull();
  });
});

// aside and footer tests
test("main index.html must contain an <aside>", () =>
  expect(docs[INDEX].querySelector("aside")).not.toBeNull());

test("main index.html must contain a <footer>", () =>
  expect(docs[INDEX].querySelector("footer")).not.toBeNull());

test("text in the <aside> must inside a <p>", () =>
  expect(docs[INDEX].querySelector("aside > p")).not.toBeNull());

test("text in the <footer> must be inside a <p>", () =>
  expect(docs[INDEX].querySelector("footer > p")).not.toBeNull());

// image tests (removed the figure requirement)
test("image paths are all lowercase and contain no spaces", () => {
  // builds the image array used by the other image tests
  let imgs = [];
  docs.forEach(doc => {
    imgs = imgs.concat(Array.from(doc.querySelectorAll("img")));
  });

  // no uppercase or whitespace
  const regex = new RegExp(/[A-Z]|\s/);

  imgs.forEach(img => {
    const path = img.src.replace(/^..\//, "");
    const dimensions = sizeOf(path);
    images.push({ img: img, dimensions: dimensions, path: path });
    expect(regex.test(path)).toBe(false);
  });
});

// TODO: ignore this for img src set and picture
test("images must be 900px wide or less", () =>
  images.forEach(img => expect(img.dimensions.width).toBeLessThanOrEqual(900)));

test("relative paths to images used, and images must be in the images directory", () => {
  const regex = new RegExp(/^images\//);
  images.forEach(image => {
    expect(regex.test(image.path)).toBe(true);
  });
});

// TODO: ignore for picture default image
test("<img> height and width attributes are set to image intrinsic width", () => {
  images.forEach(image => {
    expect(image.img.width).toBe(image.dimensions.width);
    expect(image.img.height).toBe(image.dimensions.height);
  });
});

/*************/
/* new tests */
/*************/

test("stylesheet main.css in styles folder is loaded on all pages using relative links", () => {
  const regex = new RegExp(/^(..\/|)styles\/main.css/);
  docs.forEach(doc => {
    expect(doc.querySelector("link[rel='stylesheet']")).not.toBeNull();
    expect(regex.test(doc.querySelector("link[rel='stylesheet']").href)).toBe(
      true
    );
  });
});

test("main index.html contains a <picture> element", () =>
  expect(docs[INDEX].querySelector("picture")).not.toBeNull());

test("<picture> element must contain three <source> elements with media and srcset attributes", () => {
  const sources = docs[INDEX].querySelectorAll("picture > source");
  expect(sources.length).toBeGreaterThanOrEqual(3);
  sources.forEach(source => {
    expect(source.getAttribute("media")).not.toBeNull();
    expect(source.getAttribute("srcset")).not.toBeNull();
  });
});

test("<picture> element must contain a fallback image", () =>
  expect(docs[INDEX].querySelector("picture > img")).not.toBeNull());

test("about page includes an <img> element that uses srcset and sizes to load three versions of the same image with different widths", () => {
  const img = docs[ABOUT].querySelector("img");
  expect(img.getAttribute("srcset")).not.toBeNull();
  expect(img.getAttribute("sizes")).not.toBeNull();
});

test("contact page loads an SVG file with <img>", () =>
  expect(docs[CONTACT].querySelector("img[src$='.svg']")).not.toBeNull());

test("main index.html includes a simple inline SVG image displayed using <symbol>", () => {
  expect(docs[INDEX].querySelector("svg")).not.toBeNull();
  expect(docs[INDEX].querySelector("symbol")).not.toBeNull();
});
