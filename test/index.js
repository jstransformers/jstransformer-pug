'use strict';

var assert = require('assert');
var fs = require('fs');
var jade = require('jade');

var transform = require('../');

var locals = { item: 'ítema' };
var input = fs.readFileSync(__dirname + '/input.jade', 'utf8');
var expected = fs.readFileSync(__dirname + '/expected.html', 'utf8');
var output;
var failed = false;

console.log('\ncompile():')
output = transform.compile(input).fn(locals);
console.log('\tOutput:', JSON.stringify(output));
console.log('\tExpected:', JSON.stringify(expected));
if (output !== expected) {
  console.log('\tFAILED');
  failed = true;
} else console.log('\tPASSED');

console.log('\ncompileClient():')
output = transform.compileClient(input);
output = Function('jade', output.body + '\nreturn template;')(jade.runtime)
output = output(locals);
console.log('\tOutput:', JSON.stringify(output));
console.log('\tExpected:', JSON.stringify(expected));
if (output !== expected) {
  console.log('\tFAILED');
  failed = true;
} else console.log('\tPASSED');

console.log('\nTests ' + (failed ? 'FAILED' : 'PASSED'));
