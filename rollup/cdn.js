import node from 'rollup-plugin-node-resolve';

export default {
    input: './dist/src/index.js',
    output: [{
        file: './dist/bundle/smart-table-operators.js',
        format: 'iife',
        name: 'smartTableOperators',
        sourcemap: true
    }, {
        file: './dist/bundle/smart-table-operators.es.js',
        format: 'es',
        sourcemap: true
    }],
    plugins: [node()]
};
