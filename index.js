'use strict';

var jade = require('jade');

exports.name = 'jade';
exports.outputFormat = 'html';
exports.compile = function (source, options) {
  var fn = jade.compile(source, options);
  return {fn: fn, dependencies: fn.dependencies}
};
exports.compileClient = function (source, options) {
  return jade.compileClientWithDependenciesTracked(source, options);
};
