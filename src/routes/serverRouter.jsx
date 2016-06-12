'use strict';

require('node-jsx-babel').install();
const Router = require('react-router');
const routes = require('./routes.jsx');
const responseFactory = require('./responseFactory.jsx');
const RoutingContext = Router.RouterContext;

module.exports = (req, res, next) => {
  const loadedRoutes = routes.getRoutes();
  Router.match({
    routes : loadedRoutes,
    location : decodeURI(req.url)
  }, (error, redirectLocation, state) => {
    if (error) {
      return next(error, req, res, next);
    }
    return responseFactory(req, res, RoutingContext, state);
  });
};
