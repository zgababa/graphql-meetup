'use strict';

const React = require('react');
const Router = require('react-router');
const Route = Router.Route;
const HelloWorld = require('../views/hello.jsx');

module.exports = {
  getRoutes() {
    return (
      <Route>
        <Route path={"/"} component={HelloWorld} />
      </Route>
    );
  }
};
