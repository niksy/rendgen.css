'use strict';

const assert = require('assert');

describe('rendgen.css', function () {

	let page;

	before(function () {
		page = browser.url('/basic');
		return page;
	});

	it('should apply outline to elements with invalid markup', function () {

		return page
			.getCssProperty('.Test-run:first-of-type div:last-child div', 'outline')
				.then(( outline ) => {
					assert.ok(/3px/.test(outline.value));
				});

	});

});
