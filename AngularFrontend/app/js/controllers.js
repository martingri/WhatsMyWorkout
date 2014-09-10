'use strict';

/* Controllers */

var whatsMyWorkoutControllers = angular.module('whatsMyWorkoutControllers', ['whatsMyWorkoutServices']); 

whatsMyWorkoutControllers.controller('ManageExerciseCtrl', ['$scope', 'ExerciseRepository',
function($scope, ExerciseRepository) {    
    // perform exercise add
    $scope.addExercise = function(form) {
        alert('Add exercise ' + form);
    };

    $scope.removeExercise = function(exerciseId) {
        alert('Remove exercise ' + exerciseId);
    };

    $scope.reloadExercises = function() {
        ExerciseRepository.refreshExerciseList();
    };

    $scope.$watch( function () { return ExerciseRepository.exercises; }, function () {
      $scope.exercises = ExerciseRepository.exercises;
    });

    $scope.reloadExercises();

}]);
