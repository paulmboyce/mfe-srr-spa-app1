/* eslint-disable no-console */
require("@babel/register");
const express = require("express");
const React = require("react");
const {
  renderToString,
  renderToStaticNodeStream,
} = require("react-dom/server");
var cors = require("cors");
const { ServerStyleSheet } = require("styled-components");

/** !IMPORTANT App sjhould be a named export,not a default export */
const { App } = require("./App");

console.log("APP works >>>>>>>> 2");

const app = express();
app.use(cors());
// Expose our webpack bundle for client side hydration
app.use(express.static("dist"));

// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000;

//app.use(express.static("public")); // Serve static assets like CSS, JS, and images

app.get("/", (req, res, next) => {
  const sheet = new ServerStyleSheet();
  const html = renderToString(sheet.collectStyles(<App />));
  const styleTags = sheet.getStyleTags();
  // const html = renderToString(<App />); // no styling
  res.send(styleTags.concat(html));
});

app.get("/html/stream", (req, res, next) => {
  const sheet = new ServerStyleSheet();
  const jsx = sheet.collectStyles(<App />);
  const stream = sheet.interleaveWithNodeStream(renderToStaticNodeStream(jsx));
  // var stream = renderToStaticNodeStream(<App />); // no styling
  stream.pipe(res);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
