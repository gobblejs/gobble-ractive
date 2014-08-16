module.exports = function ( definition ) {
	var dependencies, builtModule;

	dependencies = definition.imports.map( getImportPath ).concat( definition.modules );

	builtModule = '' +
		'define([\n\t' +
			dependencies.map( quote ).concat( '"require"', '"ractive"' ).join( ',\n\t' ) + '\n' +
		'], function(\n\t' +
			dependencies.map( getDependencyName ).concat( 'require', 'Ractive' ).join( ',\n\t' ) + '\n' +
		'){\n' +

		require( './shared/create-body' )( definition ) +
		'return __export__;\n' +
		'});';

	return builtModule;
};

function getImportPath ( imported ) {
	return imported.href.replace( /\.[a-zA-Z]+$/, '' );
}

function quote ( str ) {
	return '"' + str + '"';
}

function getDependencyName ( imported, i ) {
	return '__import' + i + '__';
}
