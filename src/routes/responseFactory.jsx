'use strict';

require('node-jsx-babel').install();

const fs = require('fs');
const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

function getFileContent(filePath) {
  try {
    return fs.readFileSync(path.resolve(__dirname, filePath)).toString();
  } catch (e) {
    return null;
  }
}

function buildView(html, View, props) {
  const currentHtmlView = ReactDOMServer.renderToString(React.createElement(View, props));
  return html.replace('{{app}}', currentHtmlView);
}

module.exports = function prepareResponse(req, res, View, viewProps) {
  const index = getFileContent('../views/index.html');
  const html = buildView(index, View, viewProps);
  res.type('html');
  res.send(html);
};
