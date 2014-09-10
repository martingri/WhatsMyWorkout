'use strict';

/* App Module */

var phonecatApp = angular.module('whatsMyWorkoutApp', [
    'ngRoute',
    'ngResource',
    'whatsMyWorkoutControllers',
    'whatsMyWorkoutServices'
]);

phonecatApp.constant('RULES', false);
phonecatApp.config(['$routeProvider',
		    function($routeProvider) {
			$routeProvider.
			    when('/manage-exercises', {
				templateUrl: 'partials/manage-exercises.html',
				controller: 'ManageExerciseCtrl'
			    }).
			    otherwise({
				redirectTo: '/manage-exercises'
			    });
		    }]);


