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
exports.compileFile = function (path, options) {
  var fn = jade.compileFile(path, options);
  return {fn: fn, dependencies: fn.dependencies}
};
exports.compileFileClient = function (path, options) {
  var fs   = require('fs');

  // There is no compileFileClientWithDependenciesTracked so gotta do it
  // manually.
  options = options || {};
  options.filename = options.filename || path;
  return exports.compileClient(fs.readFileSync(path, 'utf8'), options);
};
