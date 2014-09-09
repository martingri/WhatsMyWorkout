'use strict';

/* App Module */

var phonecatApp = angular.module('gamePointApp', [
    'ngRoute',
    'gamePointControllers',
    'gamePointServices'
]);

phonecatApp.constant('RULES', false);
phonecatApp.config(['$routeProvider',
		    function($routeProvider) {
			$routeProvider.
			    when('/game', {
				templateUrl: 'partials/letterSelection.html',
				controller: 'GamePointCtrl'
			    }).
			    otherwise({
				redirectTo: '/game'
			    });
		    }]);


