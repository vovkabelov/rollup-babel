const babel = require('@babel/core');

const defaultOptions = {};

const caller = {
	name: 'rollup-babel',
	supportsStaticESM: true,
	supportsDynamicImport: true
};

module.exports = options => {
	options = Object.assign({}, defaultOptions, options || {}, {caller});

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