'use strict';

/* Controllers */

var gamePointControllers = angular.module('gamePointControllers', ['gamePointServices']); 

gamePointControllers.controller('GamePointCtrl', ['$scope', 'ScoreCalculator', 'GameGenerator',
function($scope, ScoreCalculator, GameGenerator) {    
   
    $scope.addItem = function(index) {
	var selectedItem = $scope.items[index];
        ScoreCalculator.addItem(selectedItem);
       	$scope.items.splice(index,1);
    };

    $scope.removeItem = function(removedItem, index) {
	$scope.items.push(removedItem);
	var oldQuantity = ScoreCalculator.selectedItems[removedItem];
	if ( oldQuantity == 1 ){
	    delete ScoreCalculator.selectedItems[removedItem];
	} else {
	    var newQuantity = oldQuantity - 1;
	    ScoreCalculator.selectedItems[removedItem] = newQuantity;
	}
    };

    var clearVariables = function() {
	$scope.selectedItems = {};
	$scope.gamePoints = {totalPoints:0, totalBonus:0};
    }
    
    $scope.newGame = function() {
	clearVariables();
	GameGenerator.generateGame();
    };

    $scope.$watch( function () { return GameGenerator.game; }, function () {
      $scope.items = GameGenerator.game;
    });
    $scope.$watch( function () { return ScoreCalculator.selectedItems; }, function () {
	alert('changed');
	$scope.gamePoints = ScoreCalculator.calculateTotal();
	$scope.selectedItems = ScoreCalculator.selectedItems;
	alert('SelectedItems ' + ScoreCalculator.selectedItems);
    });

    $scope.newGame();

}]);
