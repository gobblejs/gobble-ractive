module.exports = function ( definition ) {
	var requireStatements, builtModule;

	requireStatements = definition.imports.map( function ( imported, i ) {
		return '__import' + i + '__ = require(\'' + imported.href.replace( /\.[a-zA-Z]+$/, '' ) + '\')';
	});

	requireStatements.unshift( 'Ractive = require(\'ractive\')' );

	builtModule = 'var ' + requireStatements.join( ',\n\t' ) + ';\n\n' +
	require( './shared/create-body' )( definition ) +
	'module.exports = __export__;';

	return builtModule;
};
