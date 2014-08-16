var rcu = require( 'rcu' );
rcu.init( require( 'ractive' ) );

module.exports = ractive;

function ractive ( source, options ) {
	var builders = require( './builders' ), builder = builders[ options.type || 'amd' ];

	if ( !builder ) {
		throw new Error( 'Cannot convert Ractive component to "' + options.type + '". Supported types: ' + Object.keys( builders ) );
	}

	return builder( rcu.parse( source ) );
}

ractive.defaults = {
	accept: '.html',
	ext: '.js'
};
