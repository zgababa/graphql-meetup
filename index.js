'use strict';

/* eslint-disable no-console */
require('node-jsx-babel').install();
const express = require('express');
const serverRouter = require('./src/routes/serverRouter.jsx');

function getRouter() {
  const router = express.Router(); // eslint-disable-line new-cap
  router.use('/', serverRouter);
  return router;
}

function getApp(router) {
  const app = express();
  app.use(router);
  return app;
}


const port = process.env.PORT || 3000;
getApp(getRouter()).listen(port, () => {
  console.log('B2C Application Server started on port %s.', port);
});
