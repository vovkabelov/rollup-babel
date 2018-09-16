const assert = require('assert');
const plugin = require('../index');

describe('Plugin', () => {
	it('Should be a function', () => {
		assert(typeof plugin === 'function');
	});

	it('Plugin should be return valid object', () => {
		let result = plugin();
		assert(typeof result === 'object');
		assert(result.name === 'rollup-babel');
		assert(typeof result.transform === 'function');
	});

	describe('Transform handler', () => {
		it('Should return valid object', () => {
			let result = plugin({sourceMaps: true}).transform('console.log("test")');
			assert(typeof result === 'object');
			assert(!!result.code);
			assert(!!result.map);
		});
	});
});