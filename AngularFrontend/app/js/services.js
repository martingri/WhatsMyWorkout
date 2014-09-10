var gamePointServices = angular.module('whatsMyWorkoutServices', []);
gamePointServices.constant('BACKEND', "http://localhost:8080");
gamePointServices.factory('ExerciseRepository', 
			  ['$http', 'BACKEND', '$resource', function($http, BACKEND, $resource){
			      var url = BACKEND;
			      var exerciseRepository = {
				  exercises : {}
			      };
			      exerciseRepository.refreshExerciseList = function() {
				  var getAllExercisesURL = BACKEND + '/exercises/all';
                                  $http({method: 'GET', url: getAllExercisesURL}).
				      success(function(data, status, headers, config) {
					  exerciseRepository.exercises = data;
				      }).
				      error(function(data, status, headers, config) {
					  alert('Could not connect to backend');
				      });
			      };
			      exerciseRepository.connectedExercise = $resource('/exercises/:id');
			      return exerciseRepository;
			   }]);
