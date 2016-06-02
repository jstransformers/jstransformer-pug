# jstransformer-pug

[Pug](http://npm.im/pug) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-pug/master.svg)](https://travis-ci.org/jstransformers/jstransformer-pug)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-pug/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-pug?branch=master)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-pug/master.svg)](http://david-dm.org/jstransformers/jstransformer-pug)
[![NPM version](https://img.shields.io/npm/v/jstransformer-pug.svg)](https://www.npmjs.org/package/jstransformer-pug)

## Installation

    npm install jstransformer-pug

## API

```js
var pug = require('jstransformer')(require('jstransformer-pug'))

pug.render('h1 Hello World!').body
//=> '<h1>Hello World!</h1>'
```

## License

MIT
