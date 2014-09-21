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

## Example with [gobble-browserify](https://github.com/gobblejs/gobble-browserify)

Given this directory structure:
```
./gobblefile.js
./src/component/some-component.html
./src/js/app.js
```

Then, the gobblefile.js should include:
```javascript
gobble( 'src' ).map( 'ractive', { type: 'cjs' } ).transform( 'browserify', {
  entries: './js/app.js', // can be string or array
  dest: 'bundle.js'
}),
```

And the javascript/app.js can include:
```javascript
var SomeComponent = require('../component/some-component');

var thing = new SomeComponent({
  el: '#id-of-the-div-where-this-component-should-be-displayed'
});
```


## License

MIT. Copyright 2014 Rich Harris
