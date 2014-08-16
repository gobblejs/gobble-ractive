module.exports = function ( definition ) {
	var importStatements, builtModule;

	importStatements = definition.imports.map( function ( imported, i ) {
		return 'import __import' + i + '__ from \'' + imported.href.replace( fileExtension, '' ) + '\';';
	});

	importStatements.unshift( 'import Ractive from \'ractive\';' );

	builtModule = importStatements.join( '\n\t' ) + ';\n\n' +
	require( './shared/create-body' )( definition ) +
	'export default __export__;';

	return builtModule;
};
