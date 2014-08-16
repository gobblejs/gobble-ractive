# gobble-ractive

Compile Ractive.js components with gobble.

## Installation

First, you need to have gobble installed - see the [gobble readme](https://github.com/gobblejs/gobble) for details. Then,

```bash
npm i -D gobble-ractive
```

## Usage

**gobblefile.js**

```js
var gobble = require( 'gobble' );
module.exports = gobble( 'ractive_components' ).map( 'ractive', { type: 'amd' });
```

Supported output types are `amd`, `cjs` (i.e. node.js modules) or `es6`. If the second argument is omitted, `amd` is the default type.


## License

MIT. Copyright 2014 Rich Harris
