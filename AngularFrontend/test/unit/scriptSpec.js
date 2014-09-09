'use strict';

describe('Game point app', function(){

    describe('GamePointCtrl', function(){
	var scope, ctrl, $httpBackend;
	beforeEach(module('gamePointApp'));
	beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
	    $httpBackend = _$httpBackend_;
	    $httpBackend.expectGET('gameRules/todaysSetup.json').
		respond({"a":{"points":30,"bonus":{"count":3,"points":100}},
			 "b":{"points":40,"bonus":{"count":2,"points":90}}});
	    
	    scope = $rootScope.$new();
	    ctrl = $controller('GamePointCtrl', {$scope: scope});
	}));

	it('should create the point scheme from xhr', function() {
	    expect(scope.pointScheme).toBeUndefined();
	    $httpBackend.flush();
		       
	    expect(scope.pointScheme).toEqual({"a":{"points":30,"bonus":{"count":3,"points":100}},
			 "b":{"points":40,"bonus":{"count":2,"points":90}}});
	});

	it('should create a new game on startup', function() {
	    expect(scope.items).toEqual([]);
	    $httpBackend.flush();
	    expect(scope.items.length).toBeGreaterThan(0);
	});
 
	it('should only use the letters from the gameRules', function() {
	    expect(scope.items).toEqual([]);
	    $httpBackend.flush();
	    while(scope.items.length > 0) {		
		var letter = scope.items.pop();
		expect(scope.pointScheme[letter]).toBeDefined();
	    }
	});
 
 	it('should have a maxItems setting',  inject(function($controller) {
	    var scope = {},
            ctrl = $controller('GamePointCtrl', {$scope:scope});
	    expect(scope.maxItems).toBe(10);
	}));

	it('It should list all the items in Scope Items',  inject(function($controller) {
	    var scope = {},
            ctrl = $controller('GamePointCtrl', {$scope:scope});
	    scope.items = ['a','b','b'];
	    
	}));
    });
});
