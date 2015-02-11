'use strict';

var jade = require('jade');

exports.name = 'jade';
exports.outputFormat = 'html';
exports.compile = function (source, options) {
  return jade.compile(source, options);
};
exports.compileClient = function (source, options) {
  return jade.compileClient(source, options);
};
exports.render = function (source, options, locals) {
  return jade.compile(source, options)(locals);
};
