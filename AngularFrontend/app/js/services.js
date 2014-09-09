var gamePointServices = angular.module('gamePointServices', []);
gamePointServices.factory('GameRules', ['$http',  
					function($http){
					    var gameRules = {};
					    gameRules.getRules = function() {
						return {   
						    "a":{
							"points":30, 
							"bonus":{
							    "count":3,
							    "points":100
							}
						    }, 
						    "b":{
							"points":40,
							"bonus":{
							    "count":2,
							    "points":90
							} 
						    }, 
						    "c":{
							"points":50,
							"bonus":{
							    "count":5,
							    "points":300
							}
						    }
						};

// $http.get('gameRules/todaysSetup.json').
// 						    success(function(data) 
// 							    {
// 								gameRules.rules = data;
// 								alert('items already in model ' + gameRules.rules);
// 							    });
					    }
					    gameRules.getMaxItems = function() { 
						return 10; 
					    };
					    return gameRules;
					}]);

gamePointServices.factory('ScoreCalculator', 
			  ['GameRules', function(GameRules){
			      var pointScheme = GameRules.getRules();
			      var scoreCalculator = {
				   selectedItems: {a:1,b:2}
			      };

			      scoreCalculator.getItemBonusPoints = function(itemName, quantity) {
				   var requiredForBonus = pointScheme[itemName].bonus.count;
				   var points = 0;
				   if (quantity == requiredForBonus) {	    
  				       points = pointScheme[itemName].bonus.points;
				   } 
				   return points;
			       };
			       
			       scoreCalculator.getItemPoints = function(itemName, quantity) {
				   var singlePoints = pointScheme[itemName].points;
				   return singlePoints*quantity;
			       };
			      
			      scoreCalculator.addItem = function(selectedItem) {
				  var tempList = scoreCalculator.selectedItems;
				  alert('templist ' + tempList);
				  var currentItemQuantity = tempList[selectedItem] | 0;
				  var newQuantity =  currentItemQuantity + 1;
				  tempList[selectedItem] = newQuantity;
				  scoreCalculator.selectedItems = tempList;
			      };

			       scoreCalculator.calculateTotal = function() {
				   var totalPoints = 0;
				   var totalBonus = 0;
				   var gamePoints = {};
				   for (var key in scoreCalculator.selectedItems) {
				       if(scoreCalculator.selectedItems.hasOwnProperty(key)) {
					   var quantity = scoreCalculator.selectedItems[key];
					   var itemBonus = scoreCalculator.getItemBonusPoints(key, quantity);
					   var itemPoints = 0;
					   if(itemBonus) {
					       totalBonus = totalBonus + itemBonus;
					       itemPoints = itemBonus;
					   } else {
					       itemPoints = scoreCalculator.getItemPoints(key, quantity);
					   }
					   gamePoints[key] = itemPoints;
					   totalPoints = totalPoints + itemPoints;
				       }
				   }
				   gamePoints.totalPoints = totalPoints;
				   gamePoints.totalBonus = totalBonus;
				   return gamePoints;
			       };
			       return scoreCalculator;
			   }]);



gamePointServices.factory('GameGenerator', 
			  ['GameRules', '$http',
			   function(GameRules, $http){
			       var gameGenerator  = {
				   game: []
			       };
			       gameGenerator.getRandomListOfItems = function(maxItems) {
				   var rules = GameRules.getRules();
				   var itemKeys = Object.keys(rules);
				   var topIndex = itemKeys.length;
 				   var itemList = [];
				   for(var count = 0; count < maxItems; count++){
 				       var randomIndex = Math.floor(Math.random() * topIndex);
				       var randomItem = itemKeys[randomIndex];
				       itemList.push(randomItem);
				   }
				   return itemList;
				   
			       };
			       gameGenerator.generateGame = function() { 
				   var maxItems = GameRules.getMaxItems();
				   var numberOfItems = Math.floor(Math.random() * maxItems) + 1;
				   gameGenerator.game = gameGenerator.getRandomListOfItems(numberOfItems);
			       };
			       return gameGenerator;
			   }]);

