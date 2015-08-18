# jstransformer-jade

[Jade](http://jade-lang.com) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-jade/master.svg)](https://travis-ci.org/jstransformers/jstransformer-jade)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-jade/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-jade?branch=master)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-jade/master.svg)](http://david-dm.org/jstransformers/jstransformer-jade)
[![NPM version](https://img.shields.io/npm/v/jstransformer-jade.svg)](https://www.npmjs.org/package/jstransformer-jade)

## Installation

    npm install jstransformer-jade

## API

```js
var jade = require('jstransformer')(require('jstransformer-jade'))

jade.render('h1 Hello World!').body
//=> '<h1>Hello World!</h1>'
```

## License

MIT
