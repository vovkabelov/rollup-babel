const babel = require('@babel/core');
const path = require('path');

const defaultOptions = {
	presets: [path.resolve(__dirname, './node_modules/@babel/preset-env')],
	plugins: [path.resolve(__dirname, './node_modules/@babel/plugin-external-helpers')],
	sourceMaps: true
};

const caller = {
	name: 'rollup-babel',
	supportsStaticESM: true,
	supportsDynamicImport: true
};

module.exports = options => {
	options = Object.assign({}, defaultOptions, options, {caller});

	return {
		name: 'rollup-babel',

		transform: (code) => {
			let transformed = babel.transform(code, options);

			return {
				code: transformed.code,
				map: transformed.map
			};
		}
	}
};