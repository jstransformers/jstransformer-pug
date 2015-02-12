'use strict';

var assert = require('assert');
var fs = require('fs');
var jade = require('jade');
var join = require('path').join;

var transform = require('../');

var locals = { name: 'jstransformer-jade' };
var file = join(__dirname, '/input.jade');
var input = fs.readFileSync(file, 'utf8');
var expected = fs.readFileSync(join(__dirname, '/expected.html'), 'utf8');
var options = { filename: file };
var output;
var failed = false;

function assertEqual(output, expected) {
  console.log('\tOutput:', JSON.stringify(output));
  console.log('\tExpected:', JSON.stringify(expected));
  if (output !== expected) {
    console.log('\tFAILED');
    failed = true;
  } else {
    console.log('\tPASSED');
  }
}

function assertDeps(deps, length) {
  length = length || 1;
  console.log('\tDeps:', deps);
  if (deps.length !== length) {
    console.log('\tDEPFAILED');
    failed = true;
  } else {
    console.log('\tDEPPASSED');
  }
}

try {
  console.log('\ncompile():');
  output = transform.compile(input, options);
  assertDeps(output.dependencies);
  output = output.fn(locals);
  assertEqual(output, expected);
} catch (e) {
  failed = true;
  console.error(e.stack);
}

try {
  console.log('\ncompileClient():')
  output = transform.compileClient(input, options);
  assertDeps(output.dependencies);
  output = Function('jade', output.body + '\nreturn template;')(jade.runtime);
  output = output(locals);
  assertEqual(output, expected);
} catch (e) {
  failed = true;
  console.error(e.stack);
}

try {
  console.log('\ncompileFile():');
  output = transform.compileFile(file);
  assertDeps(output.dependencies);
  output = output.fn(locals);
  assertEqual(output, expected);
} catch (e) {
  failed = true;
  console.error(e.stack);
}

try {
  console.log('\ncompileFileClient():')
  output = transform.compileFileClient(file);
  assertDeps(output.dependencies);
  output = Function('jade', output.body + '\nreturn template;')(jade.runtime);
  output = output(locals);
  assertEqual(output, expected);
} catch (e) {
  failed = true;
  console.error(e.stack);
}

console.log('\nTests ' + (failed ? 'FAILED' : 'PASSED'));

if (failed) process.exit(1);
