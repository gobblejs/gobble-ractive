var rcu = require( 'rcu' );
var builders = require( 'rcu-builders' );
rcu.init( require( 'ractive' ) );

module.exports = ractive;

function ractive ( source, options ) {
	var builder = builders[ options.type || 'amd' ];

	if ( !builder ) {
		throw new Error( 'Cannot convert Ractive component to "' + options.type + '". Supported types: ' + Object.keys( builders ) );
	}

	options.sourceMap = options.sourceMap !== false;

	if ( options.sourceMap ) {
		options.sourceMapFile = this.dest;
		options.sourceMapSource = this.src;
	}

	return builder( rcu.parse( source ), options );
}

ractive.defaults = {
	accept: '.html',
	ext: '.js'
};
