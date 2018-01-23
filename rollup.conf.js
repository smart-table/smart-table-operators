export default {
	input: './index.js',
	output: [
		{format: 'es', file: './dist/index.mjs'},
		{format: 'cjs', file: './dist/index.js'},
		{format: 'iife', name: 'smartTableOperators', file: './dist/smart-table-operators.js', sourcemap: true},
		{format: 'es', file: './dist/smart-table-operators.es.js', sourcemap: true}
	],
}