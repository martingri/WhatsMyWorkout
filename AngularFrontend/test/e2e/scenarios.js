'use strict';

describe('Game Point App', function(){

    it('should redirect to /app/', function() {
	browser.get('app/index.html');
	browser.getLocationAbsUrl().then(function(url) {
            expect(url.split('#')[1]).toBe('/game');
	});
    });


    describe('New game view', function() {

	beforeEach(function() {
	    browser.get('app/index.html');
	});

	it('shows at least one, and less than 10, items in the selection of items', function() {
	    var itemList = element.all(by.repeater('item in items track by $index'));
	    expect(itemList.count()).toBeGreaterThan(0);
	    expect(itemList.count()).toBeLessThan(10);
	});

	it('shows no selected items', function() {
	    var itemList = element.all(by.repeater('(key, value) in selectedItems track by $index'));
	    expect(itemList.count()).toBe(0);
	});

    });
});
